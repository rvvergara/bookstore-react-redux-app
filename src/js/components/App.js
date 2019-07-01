import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BooksDashboard from './BooksDashboard';
import '../../scss/main.scss';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={BooksDashboard} />
    </Switch>
  </Router>
);

export default App;
