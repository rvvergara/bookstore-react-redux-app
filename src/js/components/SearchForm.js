import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../services/history';
import { searchBooks } from '../thunks/book';

export const SearchForm = ({ searchBooks, searchTerm }) => {
  const [keywords, setKeywords] = useState(searchTerm || '');

  useEffect(() => {
    setKeywords(searchTerm);
  }, [setKeywords, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(keywords, true);
    setKeywords(keywords);
    history.push(`/admin/search?q=${keywords.split(' ').join('+')}`);
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
