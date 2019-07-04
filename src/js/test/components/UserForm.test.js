import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from '../../components/UserForm';
import users from '../fixtures/users';

let wrapper;
const signUp = jest.fn();
const updateAccount = jest.fn();
const setError = jest.fn();

describe('UserForm component for signup', () => {
  beforeEach(() => {
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
    wrapper.setProps({ errors: { message: 'Cannot save user', errors: { username: ['already taken'] } } });
    expect(wrapper.find('div[className="error"]').exists()).toBeTruthy();
  });
});

describe('UserForm for editing user account', () => {
  const {
    id, username, email, first_name, last_name,
  } = users[0];
  beforeEach(() => {
    wrapper = shallow(
      <UserForm
        error={null}
        updateAccount={updateAccount}
        setError={setError}
        isAuthenticated
        userData={{
          id, username, email, first_name, last_name,
        }}
      />,
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call updateAccount on successful account update', () => {
    const newFirstName = 'Rocky';
    wrapper.find('InputWrapper').at(4).prop('setInput')(newFirstName);
    wrapper.find('button[type="submit"]').simulate('click', { preventDefault: () => {} });
    expect(updateAccount).toHaveBeenLastCalledWith({
      user: {
        username, email, first_name: newFirstName, last_name,
      },
    });
  });

  test('should show an error when a user info is missing', () => {
    wrapper.setProps({ errors: { message: 'Cannot update user', errors: { email: ["can't be blank"] } } });
    wrapper.find('button[type="submit"]').simulate('click', { preventDefault: () => {} });
    expect(wrapper.find('div[className="error"]').exists()).toBeTruthy();
  });
});
