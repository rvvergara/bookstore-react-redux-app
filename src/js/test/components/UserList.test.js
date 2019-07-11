import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from '../../components/UserList';
import users from '../fixtures/users';

describe('UserList component', () => {
  const fetchUsers = jest.fn(() => Promise.resolve());
  const listUsers = jest.fn();
  let wrapper;

  test('should render correctly', () => {
    wrapper = shallow(
      <UserList
        users={users}
        currentUser={{ isAuthenticated: true, data: users[0] }}
        fetchUsers={fetchUsers}
        listUsers={listUsers}
      />,
    );
    expect(wrapper.find('UserPanel')).toBeTruthy();
  });
});
