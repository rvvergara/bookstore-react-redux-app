import React from 'react';
import { shallow } from 'enzyme';
import { SearchResultsList } from '../../components/SearchResultsList';
import users from '../fixtures/books';

describe('SearchResultsList', () => {
  let listSearchResults;
  let searchBooks;

  beforeEach(() => {
    listSearchResults = jest.fn();
    searchBooks = jest.fn(() => Promise.resolve());
  });

  test('should render correctly without search result', () => {
    const wrapper = shallow(
      <SearchResultsList
        listSearchResults={listSearchResults}
        searchResults={[]}
        searchTerm=""
        searchBooks={searchBooks}
      />,
    );
    expect(wrapper.find('BookSearchResultItem')).toEqual({});
  });
  test('should render correctly with search result', () => {
    const wrapper = shallow(
      <SearchResultsList
        listSearchResults={listSearchResults}
        searchResults={users}
        searchBooks={searchBooks}
        searchTerm="some term"
      />,
    );
    expect(wrapper.find('BookSearchResultItem')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
