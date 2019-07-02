import { SET_CURRENT_USER } from './actionTypes';
import { fetchData, setAuthorizationToken } from '../services/api';
import { setError } from './error';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});

export const authenticate = loginParams => (dispatch) => {
  const path = 'sessions';
  return fetchData('post', path, loginParams).then((res) => {
    const { user } = res.data;
    const { token } = user;
    localStorage.setItem('token', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser({ authenticated: true, data: user }));
    dispatch(setError(null));
  })
    .catch((err) => {
      dispatch(setError(err.response.data.error));
      localStorage.clear();
    });
};
