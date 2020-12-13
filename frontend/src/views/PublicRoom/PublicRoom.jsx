import { SocketContext } from 'contexts/SocketContext';
import { UserContext } from 'contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styled } from './styled';

const PublicRoom = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [room, setRoom] = useState();
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    socket?.on('message', (data) => setMessages((m) => [...m, data]));

    socket?.on('roomData', (data) => setRoom(data));

    socket?.emit('joinRoom', { username: user?.name, roomname: user?.room }, (error) => {
      if (error) {
        alert(error);
        history.push('/');
        setUser();
      }
    });

    return () => {
      socket?.emit('leaveRoom');
      socket?.removeAllListeners();
    };
  }, [socket, user, history, setUser]);
  console.log(room);

  return (
    <Styled.Wrapper>
      <Styled.SideBar>
        <Styled.Title>Usuarios</Styled.Title>
        <Styled.UserList>
          {room?.users.map((u) => (
            <Styled.UserItem self={u.name === user.name} key={user.id}>
              {u.name}
            </Styled.UserItem>
          ))}
        </Styled.UserList>
      </Styled.SideBar>
      <div>
        <div>
          {messages.map((e) => (
            <p key={e.date}>
              Escrito por: {e.username} {e.text} y recibido por {user.name}
            </p>
          ))}
        </div>

        <div>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          <div
            onClick={() => message && socket.emit('sendMessage', message, (m) => console.log(m))}
          >
            Enviar
          </div>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default PublicRoom;
