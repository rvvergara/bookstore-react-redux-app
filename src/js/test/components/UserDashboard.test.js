import React from 'react';
import { shallow } from 'enzyme';
import { UserDashboard } from '../../components/UserDashboard';

describe('UserDashboard component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <UserDashboard
        addItemMode={false}
        switchAddItemMode={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
