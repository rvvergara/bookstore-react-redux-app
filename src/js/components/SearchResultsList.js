import React from 'react';
import { connect } from 'react-redux';
import BookSearchResultItem from './BookSearchResultItem';

export const SearchResultsList = ({ searchResults }) => {
  if (searchResults !== null) {
    return searchResults.map(book => (
      <BookSearchResultItem key={book.id} book={book} />
    ));
  }
  return <p>Search for books</p>;
};

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

export default connect(mapStateToProps)(SearchResultsList);
