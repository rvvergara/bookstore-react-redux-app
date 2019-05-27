import React from 'react';
import { shallow } from 'enzyme';
import { BookList } from '../../containers/BookList';
import dummyBooks from '../fixtures/books';
import bookCategories from '../fixtures/categories';

describe('BookList', () => {
  let wrapper;
  let books;
  let categories;
  let changeFilter;
  let filter;
  let removeBook;

  beforeEach(() => {
    books = dummyBooks;
    categories = bookCategories;
    filter = '';
    changeFilter = jest.fn();
    removeBook = jest.fn();
    wrapper = shallow(
      <BookList
        books={books}
        filter={filter}
        changeFilter={changeFilter}
        removeBook={removeBook}
        switchAddBookMode={false}
      />,
    );
  });

  test('it should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call changeFilters with new category', () => {
    wrapper.find('CategoryFilter').prop('handleChange')(categories[0]);
    expect(changeFilter).toHaveBeenLastCalledWith(categories[0]);
  });

  test('it should call removeBook with id of an existing book', () => {
    wrapper.find('Book').at(2).prop('handleRemove')(books[2].id);
    expect(removeBook).toHaveBeenLastCalledWith(books[2].id);
  });
});
