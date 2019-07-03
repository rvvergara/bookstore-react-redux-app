import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from '../components/SignUpPage';

test('SignUpPage component renders correctly', () => {
  const wrapper = shallow(<SignUpPage />);
  expect(wrapper).toMatchSnapshot();
});
