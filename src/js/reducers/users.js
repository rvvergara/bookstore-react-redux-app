import { LIST_USERS } from '../actions/actionTypes';

export default (state = [], action) => {
  if (action.type === LIST_USERS) {
    return action.users;
  }
  return state;
};
