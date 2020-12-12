// eslint-disable-next-line no-undef
const socket = io();

const form = document.querySelector('#message-form');
const formInput = form.querySelector('input');
const formButton = form.querySelector('button');
const locationButton = document.querySelector('#location-button');

socket.on('message', (data) => {
  console.log(data);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formButton.setAttribute('disabled', true);
  const message = e.target.elements.message.value;

  //La funcion es una callback que se ejecuta cuando el evento se reciba
  socket.emit('sendMessage', message, (mes) => {
    console.log(`Message delivered: ${mes}`);
    formButton.removeAttribute('disabled');
    formInput.value = '';
    formInput.focus();
  });
});

locationButton.addEventListener('click', () => {
  locationButton.setAttribute('disabled', true);
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      'sendLocation',
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log(`Location shared!!`);
        locationButton.removeAttribute('disabled');
      }
    );
  });
});
