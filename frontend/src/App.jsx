import { SocketProvider } from 'contexts/SocketContext';
import { ThemeContext, MyThemeProvider } from 'contexts/ThemeContext';
import { UserProvider } from 'contexts/UserContext';
import { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import Login from 'views/Login/Login';
import PublicRoom from 'views/PublicRoom/PublicRoom';
import { lightTheme, darkTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  const context = useContext(ThemeContext);

  return (
    <Router>
      <MyThemeProvider>
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
      </MyThemeProvider>
    </Router>
  );
}

export default App;
