import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../services/history';
import { searchBooks } from '../thunks/book';

export const SearchForm = ({ searchBooks, searchTerm, isAdmin }) => {
  const [keywords, setKeywords] = useState(searchTerm || '');

  useEffect(() => {
    setKeywords(searchTerm);
  }, [setKeywords, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(keywords, isAdmin);
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

export default connect(mapStateToProps, { searchBooks })(SearchForm);
