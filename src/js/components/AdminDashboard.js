import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';

const AdminDashboard = () => (
  <div>
    <Header />
    <SearchForm />
    <SearchResultsList />
  </div>
);

export default AdminDashboard;
