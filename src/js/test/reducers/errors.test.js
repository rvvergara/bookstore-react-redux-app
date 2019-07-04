import { SET_ERRORS } from '../../actions/actionTypes';
import errorReducer from '../../reducers/errors';

describe('errorReducer', () => {
  test('should return default state', () => {
    const action = { type: 'SOME_ACTION' };

    expect(errorReducer(null, action)).toEqual(null);
  });

  test('should return an error message', () => {
    const errors = { message: 'Cannot process this', errors: { general: ["Don't even try"] } };
    const action = { type: SET_ERRORS, errors };
    expect(errorReducer(null, action)).toEqual(errors);
  });
});
