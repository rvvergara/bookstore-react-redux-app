import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from '../../components/SignUpPage';

describe('SignUpPage component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
