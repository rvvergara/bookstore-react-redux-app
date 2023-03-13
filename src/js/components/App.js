import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import UserDashboard from './UserDashboard';
import '../../scss/main.scss';
import LoginPageConnected from './LoginPage';
import SignUpPage from './SignUpPage';
import EditUserPage from './EditUserPage';
import AdminDashboardConnected from './AdminDashboard';
import HeaderConnected from './Header';
import configureStore from '../store/configureStore';
import { setCurrentUser } from '../actions/user';
import { setAuthorizationToken } from '../services/api';
import history from '../services/history';
import WithAuth from '../hocs/withAuth';
import withCorrectUser from '../hocs/withCorrectUser';
import withAdmin from '../hocs/withAdmin';
import SearchWrapperConnected from './SearchWrapper';

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
    <BrowserRouter history={history}>
      <div>
        <HeaderConnected />
        <Routes>
          <Route path="/login" element={WithAuth(LoginPageConnected)} />
          {/*<Route path="/login" element={<withAuth Component={LoginPageConnected} isPublic={true}/>} />*/}
          {/*<Route path="/signup" element={<WithAuth element={<SignUpPage />} isPublic={true}/>} />*/}
          {/*<Route path="/" element={<WithAuth element={<UserDashboard />} />} exact />*/}
          {/*<Route path="/users/:id" element={WithAuth(withCorrectUser(EditUserPage))} />*/}
          {/*<Route path="/admin" element={withAuth(withAdmin(AdminDashboardConnected))} exact />*/}
          {/*<Route path="/admin/books/search" element={withAuth(withAdmin(SearchWrapperConnected))} />*/}
          {/*<Route path="/library/search" element={withAuth(SearchWrapperConnected)} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
