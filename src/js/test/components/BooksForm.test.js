import React from 'react';
import { shallow } from 'enzyme';
import { BooksForm } from '../../components/BooksForm';

describe('BooksForm', () => {
  let wrapper;
  let newItem;
  let addItem;
  let inputItem;
  let changeFilter;
  let switchAddItemMode;

  beforeEach(() => {
    addItem = jest.fn();
    switchAddItemMode = jest.fn();
    inputItem = (bookObj) => {
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
    newItem = {
      title: 'Some Title',
      author: 'Some Author',
      chapters: '20',
      category: 'Action',
    };
    wrapper = shallow(
      <BooksForm
        addItem={addItem}
        changeFilter={changeFilter}
        switchAddItemMode={switchAddItemMode}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change state during changes in title, author and category inputs', () => {
    const {
      title, author, chapters, category,
    } = newItem;
    inputItem(newItem);
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
    inputItem(newItem);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(addItem).toHaveBeenLastCalledWith(newItem);
  });
});
