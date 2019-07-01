import { SET_CURRENT_USER } from './actionTypes';
import { fetchData } from '../services/api';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});

export const authenticate = loginParams => dispatch => fetchData('POST', 'sessions', loginParams)
  .then((d) => {
    dispatch(setCurrentUser({ authenticated: true, data: d.user }));
    d.user ? localStorage.setItem('token', d.user.token) : console.log(d);
  });
