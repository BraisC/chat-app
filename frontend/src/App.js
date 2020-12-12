import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const socket = io('http://127.0.0.1:3000');
  useEffect(() => {}, []);

  console.log('si');
  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <input value={room} onChange={(e) => setRoom(e.target.value)} type="text" />
      <div
        onClick={() => {
          socket.emit('joinRoom', { username: name, roomname: room }, (error) => {
            if (error) {
              alert(error);
            }
          });
        }}
      >
        Clickme
      </div>
    </div>
  );
}

export default App;
