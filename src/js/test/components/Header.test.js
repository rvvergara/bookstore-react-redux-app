import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import users from '../fixtures/users';

describe('Header component', () => {
  let wrapper;
  let wrapper2;
  let logout;
  let currentUser;

  beforeEach(() => {
    currentUser = { authenticated: true, data: users[0] };
    logout = jest.fn(() => Promise.resolve());
    wrapper = shallow(<Header logout={logout} currentUser={currentUser} />);
    wrapper2 = shallow(<Header logout={logout} currentUser={{ authenticated: false, data: null }} />);
  });

  test('Should render correctly while authenticated', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should log out when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
  });

  test('Should render correctly when not logged on', () => {
    expect(wrapper2).toMatchSnapshot();
  });
});
