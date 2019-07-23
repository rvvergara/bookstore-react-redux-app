import React from 'react';
import { shallow } from 'enzyme';
import { BookSearchResultPanel } from '../../components/BookSearchResultPanel';
import books from '../fixtures/books';

describe('BookSearchResultPanel', () => {
  const switchAddBookMode = jest.fn();
  const wrapper = shallow(
    <BookSearchResultPanel
      book={books[0]}
      switchAddBookMode={switchAddBookMode}
    />,
  );

  test('should render corectly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
