import { SET_CURRENT_USER } from './actionTypes';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});
