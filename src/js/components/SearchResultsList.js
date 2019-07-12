import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookSearchResultPanel from './BookSearchResultPanel';
import { listSearchResults } from '../actions/search';

export const SearchResultsList = ({ searchResults, listSearchResults }) => {
  useEffect(() => () => listSearchResults([]), [listSearchResults]);
  return searchResults.map(book => (
    <BookSearchResultPanel key={book.id} book={book} />
  ));
};

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

export default connect(mapStateToProps, { listSearchResults })(SearchResultsList);
