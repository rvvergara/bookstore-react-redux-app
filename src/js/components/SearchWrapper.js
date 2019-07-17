import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';
import { setSearchTerm } from '../actions/searchTerm';

export const SearchWrapper = ({ setSearchTerm, location }) => {
  useEffect(() => {
    const { search } = location;
    const keywords = search.substr(3).split('+').join(' ');
    setSearchTerm(keywords);
  });

  const isAdmin = location.pathname.includes('admin');

  return (
    <div>
      <SearchForm isAdmin={isAdmin} />
      <SearchResultsList isAdmin={isAdmin} />
    </div>
  );
};

export default connect(null, { setSearchTerm })(SearchWrapper);
