import { LIST_SEARCH_RESULTS } from '../../actions/actionTypes';
import searchReducer from '../../reducers/search';
import books from '../fixtures/books';

describe('searchReducer', () => {
  test('should list search results', () => {
    const action = {
      type: LIST_SEARCH_RESULTS,
      searchResults: books,
    };
    expect(searchReducer(null, action)).toEqual(books);
  });

  test('should return default state', () => {
    const action = { type: 'SOME_ACTION' };
    expect(searchReducer(books, action)).toEqual(books);
  });
});
