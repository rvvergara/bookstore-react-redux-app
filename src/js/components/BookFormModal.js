import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BookForm from './BookForm';
import { switchAddBookMode } from '../actions/book';

export const BookFormModal = ({ switchAddBookMode, addBookMode }) => (
  <Modal
    isOpen={addBookMode.on}
    ariaHideApp={false}
    onRequestClose={() => switchAddBookMode(addBookMode.book)}
    closeTimeoutMS={200}
  >
    <BookForm />
  </Modal>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

export default connect(mapStateToProps, { switchAddBookMode })(BookFormModal);
