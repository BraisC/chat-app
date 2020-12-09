// eslint-disable-next-line no-undef
const socket = io();

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;

  socket.emit('sendMessage', message);
});

socket.on('message', (data) => {
  console.log(data);
});
