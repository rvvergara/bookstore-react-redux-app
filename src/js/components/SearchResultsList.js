import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookSearchResultItem from './BookSearchResultItem';
import { listSearchResults } from '../actions/search';

export const SearchResultsList = ({ searchResults, listSearchResults }) => {
  useEffect(() => () => listSearchResults([]), [listSearchResults]);
  return searchResults.map(book => (
    <BookSearchResultItem key={book.id} book={book} />
  ));
};

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

export default connect(mapStateToProps, { listSearchResults })(SearchResultsList);
