import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import users from '../fixtures/users';

describe('LoginPage component', () => {
  let wrapper;
  let login;
  let history;

  beforeEach(() => {
    history = { push: jest.fn() };
    login = jest.fn(() => Promise.resolve(history.push('/')));
    wrapper = shallow(<LoginPage error={null} login={login} history={history} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('successful Login', () => {
    test('should call authenticate function', () => {
      wrapper.find('InputWrapper').at(0).prop('setInput')(users[0].username);
      wrapper.find('InputWrapper').at(1).prop('setInput')(
        users[0].password,
      );
      wrapper.find('button').at(0).simulate('click', {
        preventDefault: () => {},
      });
      expect(login).toHaveBeenLastCalledWith({
        email_or_username: users[0].username,
        password: users[0].password,
      });
      expect(history.push).toHaveBeenLastCalledWith('/');
    });
  });

  describe('wrong password', () => {
    test('should show error message', () => {
      wrapper.find('InputWrapper').at(0).prop('setInput')(users[0].email);
      wrapper.find('InputWrapper').at(1).prop('setInput')('somePassword');
      wrapper.find('button').at(0).simulate('click', { preventDefault: () => {} });
      wrapper.setProps({ error: 'Invalid credentials' });

      expect(wrapper.find('div.error').exists()).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
