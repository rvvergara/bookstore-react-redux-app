import { SET_ERROR } from '../../actions/actionTypes';
import errorReducer from '../../reducers/error';

describe('errorReducer', () => {
  test('should return default state', () => {
    const action = { type: 'SOME_ACTION' };

    expect(errorReducer(null, action)).toEqual(null);
  });

  test('should return an error message', () => {
    const error = 'This is not correct';
    const action = { type: SET_ERROR, error };
    expect(errorReducer(null, action)).toEqual(error);
  });
});
