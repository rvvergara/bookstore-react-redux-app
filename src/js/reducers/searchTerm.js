import { SET_SEARCH_TERM } from '../actions/actionTypes';

export default (state = null, action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.searchTerm;
  }
  return state;
};
