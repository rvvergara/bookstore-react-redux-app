import React from 'react';
import { shallow } from 'enzyme';
import CurrentChapter from '../../components/CurrentChapter';

test('CurrentChapter should render correctly', () => {
  const wrapper = shallow(<CurrentChapter currentPage="" />);
  expect(wrapper).toMatchSnapshot();
});
