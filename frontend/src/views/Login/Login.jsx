import { UserContext } from 'contexts/UserContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <input value={room} onChange={(e) => setRoom(e.target.value)} type="text" />
      <div onClick={handleLogin}>Clickme</div>
    </>
  );
};

export default Login;
