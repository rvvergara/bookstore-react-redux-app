import { switchAddBookMode } from '../../actions/addBookMode';
import { SWITCH_ADD_BOOK_MODE } from '../../actions/actionTypes';

test('switchAddBookMode should return the right action type', () => {
  expect(switchAddBookMode()).toEqual({
    type: SWITCH_ADD_BOOK_MODE,
  });
});
