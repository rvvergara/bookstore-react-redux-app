import React from 'react';
import { shallow } from 'enzyme';
import { Collection } from '../../components/Collection';
import dummyBooks from '../fixtures/books';
import bookCategories from '../fixtures/categories';

describe('Collection', () => {
  let wrapper;
  let books;
  let categories;
  let changeFilter;
  let filter;
  let removeItem;
  let switchAddItemMode;
  let switchProgressUpdate;

  beforeEach(() => {
    books = dummyBooks;
    categories = bookCategories;
    filter = '';
    changeFilter = jest.fn();
    removeItem = jest.fn();
    switchAddItemMode = jest.fn();
    switchProgressUpdate = jest.fn();
    wrapper = shallow(
      <Collection
        collection={books}
        itemForProgressUpdate={books[0]}
        filter={filter}
        changeFilter={changeFilter}
        removeItem={removeItem}
        switchAddItemMode={switchAddItemMode}
        progressUpdateMode={{ on: false, id: '' }}
        switchProgressUpdate={switchProgressUpdate}
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

  test('it should call removeItem with id of an existing book', () => {
    wrapper.find('CollectionItem').at(2).prop('handleRemove')(books[2].id);
    expect(removeItem).toHaveBeenLastCalledWith(books[2].id);
  });
});
