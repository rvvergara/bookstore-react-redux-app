import { SET_CURRENT_USER, LIST_USERS } from './actionTypes';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});

export const listUsers = users => ({
  type: LIST_USERS,
  users,
});
