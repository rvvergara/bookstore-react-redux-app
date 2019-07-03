import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from '../../components/UserForm';
import users from '../fixtures/users';

describe('UserForm component for signup', () => {
  let wrapper;
  let signUp;
  let setError;

  beforeEach(() => {
    signUp = jest.fn();
    setError = jest.fn();
    wrapper = shallow(
      <UserForm
        error={null}
        signUp={signUp}
        setError={setError}
      />,
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call signUp on complete user information', () => {
    const {
      username, email, first_name, last_name,
    } = users[0];

    wrapper.find('InputWrapper').at(0).prop('setInput')(username);
    wrapper.find('InputWrapper').at(1).prop('setInput')(email);
    wrapper.find('InputWrapper').at(2).prop('setInput')('password');
    wrapper.find('InputWrapper').at(3).prop('setInput')('password');
    wrapper.find('InputWrapper').at(4).prop('setInput')(first_name);
    wrapper.find('InputWrapper').at(5).prop('setInput')(last_name);
    wrapper.find('button[type="submit"]').simulate('click', { preventDefault: () => {} });

    expect(signUp).toHaveBeenLastCalledWith({
      user: {
        username,
        email,
        first_name,
        last_name,
        password: 'password',
        password_confirmation: 'password',
      },
    });
  });

  test('should show error when user information incomplete', () => {
    wrapper.setProps({ error: 'Cannot save user' });
    expect(wrapper.find('div[className="error"]').exists()).toBeTruthy();
  });
});
