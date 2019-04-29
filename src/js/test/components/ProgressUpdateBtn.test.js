import React from 'react';
import { shallow } from 'enzyme';
import ProgressUpdateBtn from '../../components/ProgressUpdateBtn';

test('ProgressUpdateBtn should render correctly', () => {
  const wrapper = shallow(<ProgressUpdateBtn />);
  expect(wrapper).toMatchSnapshot();
});
