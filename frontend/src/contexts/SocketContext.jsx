import { useState, useEffect, createContext } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext([]);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const s = io(process.env.REACT_APP_URL || 'localhost:4001');
    setSocket(s);
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
