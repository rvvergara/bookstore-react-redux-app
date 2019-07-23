import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import BookForm from './BookForm';
import Book from './Book';
import { switchAddBookMode } from '../actions/book';
import history from '../services/history';

export const BookModal = ({ switchAddBookMode, addBookMode }) => {
  const isAdmin = history.location.pathname.includes('admin');
  return (
    <Modal
      isOpen={addBookMode.on}
      ariaHideApp={false}
      onRequestClose={() => switchAddBookMode()}
      closeTimeoutMS={200}
    >
      {isAdmin && <BookForm /> }
      {!isAdmin && addBookMode.on && <Book /> }
    </Modal>
  );
};

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

BookModal.propTypes = {
  switchAddBookMode: PropTypes.func.isRequired,
  addBookMode: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, { switchAddBookMode })(BookModal);
