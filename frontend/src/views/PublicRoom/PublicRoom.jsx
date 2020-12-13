import { SocketContext } from 'contexts/SocketContext';
import { UserContext } from 'contexts/UserContext';
import { useContext, useEffect, useState } from 'react';

const PublicRoom = () => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    socket?.on('message', (data) => setMessage(data.text));

    socket?.on('roomData', (data) => console.log(data));

    socket?.emit('joinRoom', { username: user?.name, roomname: user?.room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => socket?.disconnect();
  }, [socket, user]);

  return <div>{message}</div>;
};

export default PublicRoom;
