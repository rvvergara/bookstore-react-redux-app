import { SWITCH_ADD_BOOK_MODE } from '../../actions/actionTypes';
import addBookModeReducer from '../../reducers/addBookMode';
import books from '../fixtures/books';

describe('addBookMode reducer', () => {
  let action;

  beforeEach(() => {
    action = { type: SWITCH_ADD_BOOK_MODE };
  });

  test('should change addBookMode form false to true', () => {
    expect(addBookModeReducer({ on: false, book: null }, action).on).toEqual(true);
  });

  test('should change addItemMode form from true to false', () => {
    expect(addBookModeReducer({ on: true, book: books[0] }, action).on).toBe(false);
  });
});
