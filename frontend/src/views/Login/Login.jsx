import { SocketContext } from 'contexts/SocketContext';
import { useContext, useEffect, useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket?.on('message', (data) => setMessage(data.text));
  }, [socket]);
  return (
    <>
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
      <div>{message}</div>
    </>
  );
};

export default Login;
