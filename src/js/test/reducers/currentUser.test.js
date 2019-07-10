import currentUserReducer from '../../reducers/currentUser';
import users from '../fixtures/users';
import { SET_CURRENT_USER } from '../../actions/actionTypes';

describe('currentUserReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      authenticated: false,
      data: null,
    };
  });

  test('should return default state', () => {
    const action = { type: 'SOME_ACTION' };
    const state = currentUserReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  test('should return a new currentUser', () => {
    const action = {
      type: SET_CURRENT_USER,
      currentUser: {
        authenticated: true,
        data: users[0],
      },
    };

    const state = currentUserReducer(initialState, action);

    expect(state).toEqual(action.currentUser);
  });
});
