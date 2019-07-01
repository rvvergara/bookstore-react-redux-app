import { SET_ERROR } from '../../actions/actionTypes';
import { setError } from '../../actions/error';

describe('setError action', () => {
  test('should return the right action', () => {
    const error = 'This is not correct';

    expect(setError(error)).toEqual({
      type: SET_ERROR,
      error,
    });
  });
});
