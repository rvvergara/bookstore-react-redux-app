import React from 'react';
import { shallow } from 'enzyme';
import { BooksForm } from '../../containers/BooksForm';

describe('BooksForm', () => {
  let wrapper;
  let newBook;
  let addBook;
  let changeFilters;

  beforeEach(() => {
    addBook = jest.fn();
    changeFilters = jest.fn();
    newBook = {
      title: 'Some Title',
      category: 'Action',
    };
    wrapper = shallow(
      <BooksForm
        addBook={addBook}
        changeFilters={changeFilters}
      />,
    );
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change state during changes in title and category inputs', () => {
    const { title } = newBook;
    const { category } = newBook;
    wrapper.find('input').simulate('change', {
      target: { value: title },
    });
    wrapper.find('select').simulate('change', {
      target: { value: category },
    });
    expect(wrapper.state()).toEqual({ title, category, error: '' });
  });

  test('should show error message if book title is empty or if ', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
  });

  test('should call addBook if valid title and category', () => {
    const { title } = newBook;
    const { category } = newBook;
    wrapper.find('input').simulate('change', {
      target: { value: title },
    });
    wrapper.find('select').simulate('change', {
      target: { value: category },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(addBook).toHaveBeenLastCalledWith(newBook);
  });
});
