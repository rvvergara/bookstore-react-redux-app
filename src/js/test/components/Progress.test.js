import React from 'react';
import { shallow } from 'enzyme';
import Progress from '../../components/Progress';

test('Progress component should render correctly', () => {
  const wrapper = shallow(
    <Progress
      currentPage={4}
      pages={35}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
