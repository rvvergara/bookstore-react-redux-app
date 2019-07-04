import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from '../thunks/book';

export const SearchForm = ({ searchBooks }) => {
  const [keywords, setKeywords] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(keywords, true);
    setKeywords('');
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

export default connect(null, { searchBooks })(SearchForm);
