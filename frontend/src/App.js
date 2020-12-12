import { useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  useEffect(() => {
    const socket = io('http://127.0.0.1:3000');
    socket.emit('joinRoom', { username: 'manolo', roomname: '2' }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, []);

  console.log('si');
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat
        </a>
      </header>
    </div>
  );
}

export default App;
