import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import BooksDashboard from './BooksDashboard';
import '../../scss/main.scss';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import configureStore from '../store/configureStore';
import { setCurrentUser } from '../actions/user';
import { setAuthorizationToken } from '../services/api';
import history from '../services/history';
import withAuth from '../hocs/withAuth';

const store = configureStore();

if (localStorage.token) {
  const userData = decode(localStorage.token);
  setAuthorizationToken(localStorage.token);

  try {
    store.dispatch(setCurrentUser({ authenticated: true, data: userData }));
  } catch (err) {
    store.dispatch(setCurrentUser({ authenticated: false, data: null }));
    localStorage.clear();
  }
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={withAuth(LoginPage, true)} />
        <Route path="/signup" component={withAuth(SignUpPage, true)} />
        <Route path="/" component={withAuth(BooksDashboard)} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
