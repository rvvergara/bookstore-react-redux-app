import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';
import { setSearchTerm } from '../actions/searchTerm';

export const SearchWrapper = ({ setSearchTerm, location }) => {
  useEffect(() => {
    const { pathname } = location;
    const keywords = pathname.substr(16).split('+').join(' ');
    setSearchTerm(keywords);
  });

  return (
    <div>
      <SearchForm />
      <SearchResultsList />
    </div>
  );
};

export default connect(null, { setSearchTerm })(SearchWrapper);
