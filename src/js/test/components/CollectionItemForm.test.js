import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItemForm } from '../../components/CollectionItemForm';

describe('CollectionItemForm', () => {
  let wrapper;
  let newBook;
  let addBook;
  let bookItem;
  let changeFilter;
  let switchAddBookMode;

  beforeEach(() => {
    addBook = jest.fn();
    switchAddBookMode = jest.fn();
    bookItem = (bookObj) => {
      const {
        title, author, chapters, category,
      } = bookObj;
      wrapper.find('input').at(0).prop('onChange')({
        target: { name: 'title', value: title },
      });

      wrapper.find('input').at(1).prop('onChange')({
        target: { name: 'author', value: author },
      });
      wrapper.find('input').at(2).prop('onChange')({
        target: { name: 'chapters', value: chapters },
      });
      wrapper.find('select').prop('onChange')({
        target: { name: 'category', value: category },
      });
    };

    changeFilter = jest.fn();
    newBook = {
      title: 'Some Title',
      author: 'Some Author',
      chapters: '20',
      category: 'Action',
    };
    wrapper = shallow(
      <CollectionItemForm
        addBook={addBook}
        changeFilter={changeFilter}
        switchAddBookMode={switchAddBookMode}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change state during changes in title, author and category inputs', () => {
    const {
      title, author, chapters, category,
    } = newBook;
    bookItem(newBook);
    expect(wrapper.state()).toEqual({
      title, category, author, chapters, error: '',
    });
  });

  test('should show error message if book title is empty or if ', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
  });

  test('should call addBook if valid title and category', () => {
    bookItem(newBook);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(addBook).toHaveBeenLastCalledWith({ ...newBook, currentChapter: '0', id: 'someId' });
  });
});
