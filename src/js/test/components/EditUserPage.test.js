import React from 'react';
import { shallow } from 'enzyme';
import EditUserPage from '../../components/EditUserPage';

describe('EditUserPage component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<EditUserPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
