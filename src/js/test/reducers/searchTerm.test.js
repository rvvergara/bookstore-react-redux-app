import { SET_SEARCH_TERM } from '../../actions/actionTypes';
import searchTermReducer from '../../reducers/searchTerm';

describe('searchTermReducer', () => {
  test('should return default state', () => {
    const action = { type: 'SOME_ACTION' };
    expect(searchTermReducer(null, action)).toEqual(null);
  });

  test('should return a searchTerm state', () => {
    const searchTerm = 'Some query';
    const action = { type: SET_SEARCH_TERM, searchTerm };
    expect(searchTermReducer(null, action)).toEqual(searchTerm);
  });
});
