import React from 'react';
import { shallow } from 'enzyme';
import { AdminDashboard } from '../../components/AdminDashboard';

describe('AdminDashboard component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<AdminDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
