import { LIST_SEARCH_RESULTS, UPDATE_SEARCH_RESULT } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_SEARCH_RESULTS:
      return action.searchResults;
    case UPDATE_SEARCH_RESULT:
    {
      const { book_id, item_id, included } = action;
      const resultIndex = state.findIndex(result => result.book_id === book_id);
      const newState = [...state];
      newState[resultIndex] = { ...newState[resultIndex], included, item_id };
      return newState;
    }
    default:
      return state;
  }
};
