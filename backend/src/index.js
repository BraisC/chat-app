const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { generateMessage } = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
  console.log('New websocket connection');

  //Emite a todos los sockets
  socket.emit('message', generateMessage('Welcome'));
  //Emite a todos los sockets menos al actual
  socket.broadcast.emit('message', generateMessage('A new user has joined'));

  //La callback es la función de acknowledgement enviada por el emisor
  socket.on('sendMessage', (message, callback) => {
    io.emit('message', generateMessage(message));
    callback('Delivered');
  });

  socket.on('sendLocation', (location, callback) => {
    io.emit(
      'message',
      generateMessage(`https://google.com/maps?q=${location.latitude},${location.longitude}`)
    );
    callback();
  });

  socket.on('disconnect', () => {
    io.emit('message', generateMessage('A user has left'));
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
