import React from 'react';
import { shallow } from 'enzyme';
import BooksFormModal from '../../components/BooksFormModal';

test('BooksFormModal should render correctly', () => {
  const wrapper = shallow(
    <BooksFormModal
      addItemMode={false}
      switchAddItemMode={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
