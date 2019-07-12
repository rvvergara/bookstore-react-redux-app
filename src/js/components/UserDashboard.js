import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { switchAddBookMode } from '../actions/books';
import Collection from './Collection';
import BooksFormModal from './BooksFormModal';

export const UserDashboard = ({ addBookMode, switchAddBookMode }) => (
  <div id="app">
    <div id="container">
      <BooksFormModal
        addBookMode={addBookMode}
        switchAddBookMode={switchAddBookMode}
      />
      <Collection />
    </div>
  </div>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

UserDashboard.propTypes = {
  addBookMode: PropTypes.bool.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { switchAddBookMode })(UserDashboard);
