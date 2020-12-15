import { SocketProvider } from 'contexts/SocketContext';
import { ThemeContext } from 'contexts/ThemeContext';
import { UserProvider } from 'contexts/UserContext';
import { useContext, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import Login from 'views/Login';
import PublicRoom from 'views/PublicRoom';
import { lightTheme, darkTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  const context = useContext(ThemeContext);

  const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    appHeight();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={context?.theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <SocketProvider>
          <UserProvider>
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/public-room" exact>
                <PublicRoom />
              </Route>
            </Switch>
          </UserProvider>
        </SocketProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
