import { SET_ERRORS } from '../../actions/actionTypes';
import { setErrors } from '../../actions/errors';

describe('setError action', () => {
  test('should return the right action', () => {
    const errors = { message: 'Cannot process this', errors: { general: "Don't even try" } };

    expect(setErrors(errors)).toEqual({
      type: SET_ERRORS,
      errors,
    });
  });
});
