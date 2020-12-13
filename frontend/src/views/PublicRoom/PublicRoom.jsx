import { SocketContext } from 'contexts/SocketContext';
import { UserContext } from 'contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const PublicRoom = () => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    socket?.on('message', (data) => setMessage(data.text));

    socket?.on('roomData', (data) => console.log(data));

    socket?.emit('joinRoom', { username: user?.name, roomname: user?.room }, (error) => {
      if (error) {
        alert(error);
        history.push('/');
        setUser();
      }
    });

    return () => socket?.emit('leaveRoom');
  }, [socket, user, history, setUser]);

  return <div>{message}</div>;
};

export default PublicRoom;
