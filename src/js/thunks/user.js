import { setCurrentUser } from '../actions/user';
import { setError } from '../actions/error';
import { fetchData, setAuthorizationToken } from '../services/api';

const setUserInStore = (user, dispatch) => {
  const { token } = user;
  localStorage.setItem('token', token);
  setAuthorizationToken(token);
  dispatch(setCurrentUser({ authenticated: true, data: user }));
  dispatch(setError(null));
};

const setErrorInStore = (err, dispatch) => {
  dispatch(setError(err.response.data.error));
  localStorage.clear();
  dispatch(setCurrentUser({ authenticated: false, data: null }));
};

export const login = loginParams => (dispatch) => {
  const path = 'sessions';
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
  const path = 'users';
  return fetchData('post', path, signupParams)
    .then((res) => {
      const { user } = res.data;
      setUserInStore(user, dispatch);
    })
    .catch((err) => {
      setErrorInStore(err, dispatch);
    });
};

export const updateAccount = (username, userParams) => (dispatch) => {
  const path = `users/${username}`;

  return fetchData('put', path, userParams)
    .then((res) => {
      const { user } = res.data;
      setUserInStore(user, dispatch);
    })
    .catch((err) => {
      setErrorInStore(err, dispatch);
    });
};
