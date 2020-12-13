import { UserContext } from 'contexts/UserContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styled } from './styled';

const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const { user, setUser } = useContext(UserContext);
  const isInitialMount = useRef(true);
  const inputRef = useRef();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && room) {
      setUser({ name, room });
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (user) {
      history.push('/public-room');
    }
  }, [user, history]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Card onSubmit={handleLogin}>
        <Styled.Title>Benvido</Styled.Title>
        <Styled.Input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Styled.Input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          type="text"
          placeholder="Sala"
        />
        <Styled.Button onClick={handleLogin}>Entra</Styled.Button>
      </Styled.Card>
    </Styled.Wrapper>
  );
};

export default Login;
