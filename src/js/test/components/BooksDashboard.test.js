import React from 'react';
import { shallow } from 'enzyme';
import BooksDashboard from '../../components/BooksDashboard';

describe('BooksDashboard component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<BooksDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
