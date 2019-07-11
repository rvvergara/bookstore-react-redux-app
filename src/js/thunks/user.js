import decode from 'jwt-decode';
import { setCurrentUser, listUsers } from '../actions/user';
import { setErrors } from '../actions/errors';
import { fetchData, setAuthorizationToken } from '../services/api';

const setUserInStore = (user, dispatch) => {
  const { token } = user;
  localStorage.setItem('token', token);
  setAuthorizationToken(token);
  dispatch(setCurrentUser({ authenticated: true, data: user }));
  dispatch(setErrors(null));
};

export const fetchUsers = () => (dispatch) => {
  const path = '/v1/users';
  return fetchData('get', path)
    .then((res) => {
      const { users } = res.data;
      dispatch(listUsers(users));
      dispatch(setErrors(null));
    })
    .catch(error => setErrorInStore(error, dispatch));
};

const setErrorInStore = (err, dispatch) => {
  dispatch(setErrors(err.response.data));
  localStorage.clear();
  dispatch(setCurrentUser({ authenticated: false, data: null }));
};

export const login = loginParams => (dispatch) => {
  const path = '/v1/sessions';
  return fetchData('post', path, loginParams).then((res) => {
    const { user } = res.data;
    setUserInStore(user, dispatch);
  })
    .catch(err => setErrorInStore(err, dispatch));
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  setAuthorizationToken(false);
  dispatch(setCurrentUser({ authenticated: false, data: null }));
};

export const signUp = signupParams => (dispatch) => {
  const path = '/v1/users';
  return fetchData('post', path, signupParams)
    .then((res) => {
      const { user } = res.data;
      setUserInStore(user, dispatch);
    })
    .catch((err) => {
      setErrorInStore(err, dispatch);
    });
};

export const updateAccount = userParams => (dispatch) => {
  const path = `/v1/users/${userParams.user.username}`;
  return fetchData('put', path, userParams)
    .then((res) => {
      const { user } = res.data;
      const { token } = user;
      if (token === null) {
        const currentUser = { ...decode(localStorage.token), token: localStorage.token };
        setUserInStore(currentUser, dispatch);
      } else {
        setUserInStore(user, dispatch);
      }
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
    });
};
