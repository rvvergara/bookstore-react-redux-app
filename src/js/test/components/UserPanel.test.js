import React from 'react';
import { shallow } from 'enzyme';
import { UserPanel } from '../../components/UserPanel';
import users from '../fixtures/users';

describe('UserPanel component', () => {
  const updateAccount = jest.fn(() => Promise.resolve());
  const fetchUsers = jest.fn(() => Promise.resolve());
  const wrapper = shallow(
    <UserPanel
      user={users[0]}
      updateAccount={updateAccount}
      currentUserLevel={2}
      fetchUsers={fetchUsers}
    />,
  );

  test('should render correctly when currentUser is level 2', () => {
    expect(wrapper.find('div.user-panel__access-switch')).toEqual({});
  });

  test('should render correctly when level is 2', () => {
    wrapper.setProps({ currentUserLevel: 3 });
    expect(wrapper.find('div.user-panel__access-switch')).toBeTruthy();
  });
});
