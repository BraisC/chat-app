import { UserContext } from 'contexts/UserContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styled } from './styled';

const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const handleLogin = () => {
    if (name && room) {
      setUser({ name, room });
      history.push('/public-room');
    }
  };

  return (
    <Styled.Wrapper>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <input value={room} onChange={(e) => setRoom(e.target.value)} type="text" />
        <div onClick={handleLogin}>Clickme</div>
      </div>
    </Styled.Wrapper>
  );
};

export default Login;
