import { LIST_USERS } from '../../actions/actionTypes';
import usersReducer from '../../reducers/users';
import users from '../fixtures/users';

describe('usersReducer', () => {
  test('should return default state', () => {
    const action = { type: 'SOME_ACTION' };
    expect(usersReducer([], action)).toEqual([]);
  });

  test('should return an array of users as new state', () => {
    const action = { type: LIST_USERS, users };
    expect(usersReducer([], action)).toEqual(users);
  });
});
