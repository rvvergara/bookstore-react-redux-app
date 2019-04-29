import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Header component should render correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
