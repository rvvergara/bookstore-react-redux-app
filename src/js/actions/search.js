import { LIST_SEARCH_RESULTS, UPDATE_SEARCH_RESULT } from './actionTypes';

export const listSearchResults = searchResults => ({
  type: LIST_SEARCH_RESULTS,
  searchResults,
});

export const updateSearchResult = (book_id, item_id) => ({
  type: UPDATE_SEARCH_RESULT,
  book_id,
  item_id,
});
