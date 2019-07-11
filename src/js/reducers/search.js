import { LIST_SEARCH_RESULTS } from '../actions/actionTypes';

export default (state = [], action) => {
  if (action.type === LIST_SEARCH_RESULTS) {
    return action.searchResults;
  }
  return state;
};
