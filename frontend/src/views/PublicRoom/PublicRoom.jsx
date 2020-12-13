import { SocketContext } from 'contexts/SocketContext';
import { UserContext } from 'contexts/UserContext';
import dayjs from 'dayjs';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styled } from './styled';

const PublicRoom = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [room, setRoom] = useState();
  const inputRef = useRef();
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
  }, []);

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
            <Styled.UserItem self={u.name === user.name} key={user.id}>
              {u.name}
            </Styled.UserItem>
          ))}
        </Styled.UserList>
      </Styled.SideBar>
      <Styled.Chat>
        <Styled.Messages>
          {messages.map((m, i) => {
            const lastMessage = messages.length - 1 === i;
            return (
              <>
                {m.username === 'Administrador' ? (
                  <Styled.AdminMessageWrapper ref={lastMessage ? setRef : null} key={m.date}>
                    <Styled.AdminMessage>{m.text}</Styled.AdminMessage>
                  </Styled.AdminMessageWrapper>
                ) : (
                  <Styled.MessageWrapper
                    ref={lastMessage ? setRef : null}
                    key={m.date}
                    self={m.username === user.name}
                  >
                    <Styled.MessageContent>
                      <Styled.Username>{m.username}</Styled.Username>
                      <Styled.Message>{m.text}</Styled.Message>
                      <Styled.Date>{dayjs(m.date).format('DD/MM/YY - H:mm')}</Styled.Date>
                    </Styled.MessageContent>
                  </Styled.MessageWrapper>
                )}
              </>
            );
          })}
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
