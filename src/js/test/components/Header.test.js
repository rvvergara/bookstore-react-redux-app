import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('Header component', () => {
  let wrapper;
  let logout;

  beforeEach(() => {
    logout = jest.fn(() => Promise.resolve());
    wrapper = shallow(<Header logout={logout} />);
  });

  test('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should log out when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
  });
});
