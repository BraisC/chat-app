const http = require('http');
const socketio = require('socket.io');
const { generateMessage } = require('./utils/messages');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');

const server = http.createServer();
const io = socketio(server);

const port = process.env.PORT || 4001;

io.on('connection', (socket) => {
  console.log('New websocket connection');

  socket.on('joinRoom', ({ username, roomname }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, roomname });
    if (error) {
      return callback(error);
    }

    socket.join(user.room);

    //Emite a todos los sockets
    socket.emit('message', generateMessage('Administrador', 'Benvido!'));

    //Emite a todos los sockets en la room menos al actual
    socket.broadcast
      .to(user.room)
      .emit('message', generateMessage('Administrador', `${user.name} entrou na sala`));

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  //La callback es la función de acknowledgement enviada por el emisor
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user?.room).emit('message', generateMessage(user.name, message));
    callback();
  });

  socket.on('leaveRoom', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        generateMessage('Administrador', `${user.name} abandonou a sala`)
      );
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        generateMessage('Administrador', `${user.name} abandonou a sala`)
      );
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
