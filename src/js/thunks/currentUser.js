import { setCurrentUser } from '../actions/currentUser';
import { setError } from '../actions/error';
import { fetchData, setAuthorizationToken } from '../services/api';

export const login = loginParams => (dispatch) => {
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

export const logout = () => {};
