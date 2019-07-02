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
import { setAuthorizationToken } from '../services/api';
import withAuth from '../hocs/withAuth';

export const history = createBrowserHistory();

const store = configureStore();

if (localStorage.token) {
  const userData = decode(localStorage.token);
  setAuthorizationToken(localStorage.token);

  try {
    store.dispatch(setCurrentUser({ authenticated: true, data: userData }));
  } catch (err) {
    store.dispatch(setCurrentUser({ authenticated: false, data: null }));
  }
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={withAuth(BooksDashboard, store.getState().currentUser.authenticated)} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
