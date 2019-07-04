import { SET_ERRORS } from '../actions/actionTypes';

export default (state = null, action) => {
  if (action.type === SET_ERRORS) {
    return action.errors;
  }
  return state;
};
