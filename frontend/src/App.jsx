import { SocketProvider } from 'contexts/SocketContext';
import { UserProvider } from 'contexts/UserContext';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from 'views/Login/Login';
import PublicRoom from 'views/PublicRoom/PublicRoom';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
