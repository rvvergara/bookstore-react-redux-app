import { SET_SEARCH_TERM } from '../../actions/actionTypes.js';
import { setSearchTerm } from '../../actions/searchTerm';

describe('setSearchTerm', () => {
  test('returns the right action', () => {
    expect(setSearchTerm('Some query')).toEqual({
      type: SET_SEARCH_TERM,
      searchTerm: 'Some query',
    });
  });
});
