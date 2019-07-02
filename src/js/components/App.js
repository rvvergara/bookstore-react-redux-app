import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import decode from 'jwt-decode';
import BooksDashboard from './BooksDashboard';
import '../../scss/main.scss';
import LoginPage from '../containers/LoginPage';
import configureStore from '../store/configureStore';
import { setCurrentUser } from '../actions/currentUser';

export const history = createBrowserHistory();

const store = configureStore();

if (localStorage.token) {
  const userData = decode(localStorage.token);
  if (userData) {
    store.dispatch(setCurrentUser({ authenticated: true, data: userData }));
  }
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={BooksDashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
