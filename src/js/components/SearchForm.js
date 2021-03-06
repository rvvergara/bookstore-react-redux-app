import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import history from '../services/history';
import { searchBooks } from '../thunks/book';

export const SearchForm = ({ searchBooks, searchTerm }) => {
  const [keywords, setKeywords] = useState(searchTerm || '');
  const isAdmin = history.location.pathname.includes('admin');

  useEffect(() => {
    setKeywords(searchTerm);
  }, [setKeywords, searchTerm]);

  const handleSearch = (e) => {
    NProgress.start();
    e.preventDefault();
    searchBooks(keywords, isAdmin).then(() => NProgress.done());
    setKeywords(keywords);
    const basePath = isAdmin ? '/admin/books' : '/library';
    history.push(`${basePath}/search?q=${keywords.split(' ').join('+')}`);
  };
  return (
    <div className="form-wrapper search-form">
      <form className="form">
        <input
          type="search"
          className="form-input"
          placeholder="Search books, authors, etc"
          value={keywords}
          onChange={e => setKeywords(e.target.value)}
        />
        <button
          type="submit"
          className="add-book-btn btn-sm"
          onClick={handleSearch}
        >
            Search
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

SearchForm.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { searchBooks })(SearchForm);
