import { UserContext } from 'contexts/UserContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styled } from './styled';

const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const { user, setUser } = useContext(UserContext);
  const isInitialMount = useRef(true);

  const history = useHistory();

  const handleLogin = () => {
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

  return (
    <Styled.Wrapper>
      <Styled.Card>
        <Styled.Title>Benvido</Styled.Title>
        <Styled.Input
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
