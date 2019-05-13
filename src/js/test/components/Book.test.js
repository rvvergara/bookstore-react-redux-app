import React from 'react';
import { shallow } from 'enzyme';
import Book from '../../components/Book';

describe('Book component', () => {
  let wrapper;
  let book;
  let handleRemove;
  beforeEach(() => {
    book = {
      id: 1,
      title: 'Antiquities of the Jews',
      category: 'History',
    };
    handleRemove = jest.fn();
    wrapper = shallow(<Book book={book} handleRemove={handleRemove} />);
  });

  test('it should render the Book component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call handleRemove on button click', () => {
    wrapper.find('button').simulate('click');
    expect(handleRemove).toHaveBeenLastCalledWith(book.id);
  });
});
