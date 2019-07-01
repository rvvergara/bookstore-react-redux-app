import { SWITCH_ADD_BOOK_MODE } from '../../actions/actionTypes';
import addBookModeReducer from '../../reducers/addBookMode';

describe('addBookMode reducer', () => {
  let action;

  beforeEach(() => {
    action = { type: SWITCH_ADD_BOOK_MODE };
  });

  test('should change addBookMode form false to true', () => {
    expect(addBookModeReducer(false, action)).toEqual(true);
  });

  test('should change addBookMode form from true to false', () => {
    expect(addBookModeReducer(true, action)).toBe(false);
  });
});
