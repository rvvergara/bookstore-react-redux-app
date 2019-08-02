import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookSearchResultPanel from './BookSearchResultPanel';
import BookModal from './BookModal';
import { searchBooks } from '../thunks/book';
import history from '../services/history';

export const SearchResultsList = ({
  searchResults,
  searchTerm,
  error,
  searchBooks,
}) => {
  const isAdmin = history.location.pathname.includes('admin');

  useEffect(() => {
    if (searchTerm !== '') searchBooks(searchTerm, isAdmin);
  }, [searchBooks, searchTerm, isAdmin]);

  return (
    <div>
      <BookModal />
      {searchResults.length > 0 && (
      <h4 className="search-result-heading">
        Search results for
        {' '}
        {searchTerm}
      </h4>
      )}
      {searchResults.map(book => (
        <BookSearchResultPanel key={book.book_id} book={book} />
      ))}
      {
        error && (
        <h4>
          No results for
          {' '}
          {searchTerm}
        </h4>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  searchTerm: state.searchTerm,
  error: state.errors ? state.errors[0] : null,
});

SearchResultsList.propTypes = {
  searchResults: PropTypes.instanceOf(Object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Object),
  searchBooks: PropTypes.func.isRequired,
};

SearchResultsList.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, { searchBooks })(SearchResultsList);
