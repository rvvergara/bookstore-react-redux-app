import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import BookForm from './BookForm';
import { switchAddBookMode } from '../actions/book';

export const BookModal = ({ switchAddBookMode, addBookMode, isAdmin }) => (
  <Modal
    isOpen={addBookMode.on}
    ariaHideApp={false}
    onRequestClose={() => switchAddBookMode(addBookMode.book)}
    closeTimeoutMS={200}
  >
    {isAdmin && <BookForm />}
  </Modal>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

export default connect(mapStateToProps, { switchAddBookMode })(BookModal);
