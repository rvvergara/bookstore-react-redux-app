import React from 'react';
import { shallow } from 'enzyme';
import { ProgressUpdateBtn } from '../../containers/ProgressUpdateBtn';

test('ProgressUpdateBtn should render correctly', () => {
  const switchProgressUpdate = jest.fn();
  const wrapper = shallow(
    <ProgressUpdateBtn
      id="someId"
      switchProgressUpdate={switchProgressUpdate}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
