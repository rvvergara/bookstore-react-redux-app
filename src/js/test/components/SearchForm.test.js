import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from '../../components/SearchForm';

describe('SearchForm component', () => {
  const searchBooks = jest.fn(() => Promise.resolve());
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm searchBooks={searchBooks} searchTerm="cool" />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call searchBooks', () => {
    const searchTerm = 'Some words';
    wrapper.find('input').prop('onChange')({
      target: { value: searchTerm },
    });
    wrapper.find('button').simulate('click', { preventDefault: () => {} });
    expect(searchBooks).toHaveBeenLastCalledWith(searchTerm, false);
  });
});
