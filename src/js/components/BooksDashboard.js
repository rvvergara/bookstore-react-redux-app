import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../containers/BookList';
import BooksFormModal from './BooksFormModal';
import Header from './Header';

export const BooksDashboard = ({ addBookMode }) => (
  <div id="app">
    <Header />
    <div id="container">
      <BooksFormModal addBookMode={addBookMode} />
      <BookList />
    </div>
  </div>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

BooksDashboard.propTypes = {
  addBookMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(BooksDashboard);
