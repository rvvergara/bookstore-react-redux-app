import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookSearchResultPanel from './BookSearchResultPanel';
import { listSearchResults } from '../actions/search';

export const SearchResultsList = ({ searchResults, listSearchResults }) => {
  useEffect(() => () => listSearchResults([]), [listSearchResults]);
  return (

    <div>
      {searchResults.length > 0 && (
      <h4 className="search-result-heading">
        Search results for
        {' '}
        {}
      </h4>
      )}
      {searchResults.map(book => (
        <BookSearchResultPanel key={book.id} book={book} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

export default connect(mapStateToProps, { listSearchResults })(SearchResultsList);
