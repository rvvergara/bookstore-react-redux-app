import React from 'react';
import { shallow } from 'enzyme';
import BooksFormModal from '../../components/BooksFormModal';

test('BooksFormModal should render correctly', () => {
  const wrapper = shallow(
    <BooksFormModal
      addBookMode={false}
      switchAddBookMode={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
