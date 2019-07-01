import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import users from '../fixtures/users';

describe('LoginPage component', () => {
  let wrapper;
  let authenticate;

  beforeEach(() => {
    authenticate = jest.fn();
    wrapper = shallow(<LoginPage error={null} authenticate={authenticate} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('successful Login', () => {
    test('should call authenticate function', () => {
      wrapper.find('input[type="email"]').prop('onChange')({
        target: { value: users[0].username },
      });
      wrapper.find('input[type="password"]').prop('onChange')({
        target: { value: users[0].password },
      });
      wrapper.find('button').simulate('click', {
        preventDefault: () => {},
      });
      expect(authenticate).toHaveBeenLastCalledWith({
        email_or_username: users[0].username,
        password: users[0].password,
      });
    });
  });

  describe('wrong password', () => {
    test('should show error message', () => {
      wrapper.find('input[type="email"]').simulate('change', { target: { value: users[0].email } });
      wrapper.find('input[type="password"]').simulate('change', { target: { value: 'somePassword' } });
      wrapper.find('button').simulate('click', { preventDefault: () => {} });

      expect(wrapper.find('div.error').exists()).toBeTruthy();
    });
  });
});
