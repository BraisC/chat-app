// eslint-disable-next-line no-undef
const socket = io();

socket.on('message', (data) => {
  console.log(data);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;

  //La funcion es una callback que se ejecuta cuando el evento se reciba
  socket.emit('sendMessage', message, (mes) => {
    console.log(`Message delivered: ${mes}`);
  });
});

document.querySelector('#location-button').addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      'sendLocation',
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log(`Location shared!!`);
      }
    );
  });
});
