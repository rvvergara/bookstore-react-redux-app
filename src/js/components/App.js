import React from 'react';
import Header from './Header';
import BooksForm from '../containers/BooksForm';
import BookList from '../containers/BookList';
import '../../scss/main.scss';

export default () => (
  <div id="app">
    <Header />
    <div id="container">
      <BooksForm />
      <BookList />
    </div>
  </div>
);
