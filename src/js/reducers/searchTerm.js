import { SET_SEARCH_TERM } from '../actions/actionTypes';

export default (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.searchTerm;
  }
  return state;
};
