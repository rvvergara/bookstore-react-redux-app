import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from '../../components/CollectionItem';

describe('Book component', () => {
  let wrapper;
  let item;
  let handleRemove;
  beforeEach(() => {
    item = {
      book_id: 1,
      title: 'Antiquities of the Jews',
      author: 'Josephus',
      chapters: '30',
      currentChapter: '',
      category: 'History',
    };
    handleRemove = jest.fn();
    wrapper = shallow(<CollectionItem item={item} handleRemove={handleRemove} />);
  });

  test('it should render the Book component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call handleRemove on button click', () => {
    wrapper.find('button').simulate('click');
    expect(handleRemove).toHaveBeenLastCalledWith(item.book_id);
  });
});
