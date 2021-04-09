import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { Login } from './layout/Login';
import { Home } from './layout/Home'

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalContext>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </GlobalContext>
      </Switch>
    </Router>
  );
}

export default Routes;
