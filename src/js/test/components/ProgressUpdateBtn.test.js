import React from 'react';
import { shallow } from 'enzyme';
import { ProgressUpdateBtn } from '../../containers/ProgressUpdateBtn';

test('ProgressUpdateBtn should render correctly', () => {
  const wrapper = shallow(<ProgressUpdateBtn />);
  expect(wrapper).toMatchSnapshot();
});
