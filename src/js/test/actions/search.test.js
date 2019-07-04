import { LIST_SEARCH_RESULTS } from '../../actions/actionTypes';
import { listSearchResults } from '../../actions/search';
import books from '../fixtures/books';

describe('listSearchResults action', () => {
  test('should return the right action', () => {
    expect(listSearchResults(books)).toEqual({ type: LIST_SEARCH_RESULTS, searchResults: books });
  });
});
