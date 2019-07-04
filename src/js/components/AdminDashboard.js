import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { searchBooks } from '../thunks/book';

const AdminDashboard = ({ searchBooks }) => {
  const [keywords, setKeywords] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(keywords, true);
    setKeywords('');
  };
  return (
    <div>
      <Header />
      <form>
        <input
          type="search"
          placeholder="Search books, authors, etc"
          value={keywords}
          onChange={e => setKeywords(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default connect(null, { searchBooks })(AdminDashboard);
