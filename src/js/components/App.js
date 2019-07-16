import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import UserDashboard from './UserDashboard';
import '../../scss/main.scss';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import EditUserPage from './EditUserPage';
import AdminDashboard from './AdminDashboard';
import Header from './Header';
import configureStore from '../store/configureStore';
import { setCurrentUser } from '../actions/user';
import { setAuthorizationToken } from '../services/api';
import history from '../services/history';
import withAuth from '../hocs/withAuth';
import withCorrectUser from '../hocs/withCorrectUser';
import withAdmin from '../hocs/withAdmin';
import SearchWrapper from './SearchWrapper';

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
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={withAuth(LoginPage, true)} />
          <Route path="/signup" component={withAuth(SignUpPage, true)} />
          <Route path="/" component={withAuth(UserDashboard)} exact />
          <Route path="/users/:id" component={withAuth(withCorrectUser(EditUserPage))} />
          <Route path="/admin" component={withAuth(withAdmin(AdminDashboard))} exact />
          <Route path="/admin/search" component={withAuth(withAdmin(SearchWrapper))} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
