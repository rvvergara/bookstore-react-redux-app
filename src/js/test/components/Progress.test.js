import React from 'react';
import { shallow } from 'enzyme';
import Progress from '../../components/Progress';

test('Progress component should render correctly', () => {
  const wrapper = shallow(
    <Progress
      currentChapter={4}
      chapters={35}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
