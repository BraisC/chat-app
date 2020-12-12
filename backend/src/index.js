const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { generateMessage } = require('./utils/messages');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
  console.log('New websocket connection');

  socket.on('joinRoom', ({ username, roomname }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, roomname });

    if (error) {
      return callback(error);
    }

    socket.join(user.room);

    //Emite a todos los sockets
    socket.emit('message', generateMessage('Administrador', 'Bienvenido'));

    //Emite a todos los sockets en la room menos al actual
    socket.broadcast
      .to(user.room)
      .emit('message', generateMessage('Administrador', `${user.name} se ha unido`));

    callback();
  });

  //La callback es la función de acknowledgement enviada por el emisor
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user?.room).emit('message', generateMessage(user.name, message));
    callback('Delivered');
  });

  socket.on('sendLocation', (location, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit(
      'locationMessage',
      generateMessage(
        user.name,
        `https://google.com/maps?q=${location.latitude},${location.longitude}`
      )
    );
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', generateMessage(`${user.name} ha abandonado la sala`));
    }
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
