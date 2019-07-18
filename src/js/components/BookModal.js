import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import BookForm from './BookForm';
import Book from './Book';
import { switchAddBookMode } from '../actions/book';

export const BookModal = ({ switchAddBookMode, addBookMode, isAdmin }) => (
  <Modal
    isOpen={addBookMode.on}
    ariaHideApp={false}
    onRequestClose={() => switchAddBookMode(addBookMode.book)}
    closeTimeoutMS={200}
  >
    {isAdmin && <BookForm /> }
    {!isAdmin && addBookMode.on && <Book book={addBookMode.book} /> }
  </Modal>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

export default connect(mapStateToProps, { switchAddBookMode })(BookModal);
