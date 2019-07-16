import React from 'react';
import { shallow } from 'enzyme';
import CollectionItemFormModal from '../../components/CollectionItemFormModal';

test('CollectionItemFormModal should render correctly', () => {
  const wrapper = shallow(
    <CollectionItemFormModal
      addBookMode={{ on: false, book: null }}
      switchAddBookMode={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
