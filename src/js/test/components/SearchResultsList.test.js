import React from 'react';
import { shallow } from 'enzyme';
import { SearchResultsList } from '../../components/SearchResultsList';
import users from '../fixtures/books';

describe('SearchResultsList', () => {
  test('should render correctly without search result', () => {
    const listSearchResults = jest.fn();
    const wrapper = shallow(
      <SearchResultsList
        listSearchResults={listSearchResults}
        searchResults={[]}
      />,
    );
    expect(wrapper.find('BookSearchResultItem')).toEqual({});
  });
  test('should render correctly with search result', () => {
    const listSearchResults = jest.fn();
    const wrapper = shallow(
      <SearchResultsList
        listSearchResults={listSearchResults}
        searchResults={users}
      />,
    );
    expect(wrapper.find('BookSearchResultItem')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
