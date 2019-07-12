import { SWITCH_ADD_ITEM_MODE } from '../../actions/actionTypes';
import addItemModeReducer from '../../reducers/addItemMode';

describe('addItemMode reducer', () => {
  let action;

  beforeEach(() => {
    action = { type: SWITCH_ADD_ITEM_MODE };
  });

  test('should change addItemMode form false to true', () => {
    expect(addItemModeReducer(false, action)).toEqual(true);
  });

  test('should change addItemMode form from true to false', () => {
    expect(addItemModeReducer(true, action)).toBe(false);
  });
});
