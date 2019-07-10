import { SET_CURRENT_USER, LIST_USERS } from '../../actions/actionTypes';
import { setCurrentUser, listUsers } from '../../actions/user';
import users from '../fixtures/users';

describe('setCurrentUser', () => {
  test('it returns the right action', () => {
    const ryto = users[0];
    expect(setCurrentUser({ authenticated: true, data: ryto })).toEqual({
      type: SET_CURRENT_USER,
      currentUser: { authenticated: true, data: ryto },
    });
  });
});

describe('listUsers', () => {
  test('returns the right action', () => {
    expect(listUsers(users)).toEqual({
      type: LIST_USERS,
      users,
    });
  });
});
