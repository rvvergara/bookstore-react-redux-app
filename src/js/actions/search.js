import { LIST_SEARCH_RESULTS } from './actionTypes';

export const listSearchResults = searchResults => ({
  type: LIST_SEARCH_RESULTS,
  searchResults,
});
