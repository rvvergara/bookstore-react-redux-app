import React from 'react';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const BooksDashboard = () => (
  <div id="app">
    <Header />
    <div id="container">
      <BooksForm />
      <BookList />
    </div>
  </div>
);

export default BooksDashboard;
