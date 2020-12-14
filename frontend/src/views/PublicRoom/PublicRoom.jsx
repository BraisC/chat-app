import { SocketContext } from 'contexts/SocketContext';
import { UserContext } from 'contexts/UserContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MessageList from './components/MessageList';
import { Styled } from './styled';

const PublicRoom = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState();
  const inputRef = useRef();

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

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSend = (e) => {
    e.preventDefault();
    message && socket.emit('sendMessage', message, () => console.log('Mensaxe recibida'));
    setMessage('');
    inputRef.current.focus();
  };

  return (
    <Styled.Wrapper>
      <Styled.SideBar>
        <Styled.Title>Usuarios</Styled.Title>
        <Styled.UserList>
          {room?.users.map((u) => (
            <Styled.UserItem self={u.name === user.name} key={u.id}>
              {u.name}
            </Styled.UserItem>
          ))}
        </Styled.UserList>
      </Styled.SideBar>
      <Styled.Chat>
        <Styled.Messages>
          <MessageList messages={messages} user={user} />
        </Styled.Messages>

        <Styled.WriteMessage onSubmit={handleSend}>
          <Styled.MessageInput
            ref={inputRef}
            type="text"
            value={message}
            placeholder="Escribe a tua mensaxe"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Styled.Button onClick={handleSend}>
            <Styled.ButtonText>Enviar</Styled.ButtonText>
          </Styled.Button>
        </Styled.WriteMessage>
      </Styled.Chat>
    </Styled.Wrapper>
  );
};

export default PublicRoom;
