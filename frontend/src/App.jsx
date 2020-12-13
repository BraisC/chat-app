import { SocketProvider } from 'contexts/SocketContext';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from 'views/Login/Login';

function App() {
  return (
    <Router>
      <SocketProvider>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </SocketProvider>
    </Router>
  );
}

export default App;
