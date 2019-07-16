import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BookForm from './BookForm';
import { switchAddBookMode } from '../actions/book';

export const BookFormModal = ({ switchAddBookMode, addBookMode }) => (
  <Modal
    isOpen={addBookMode}
    ariaHideApp={false}
    onRequestClose={switchAddBookMode}
    closeTimeoutMS={200}
  >
    <h3>Book Form Modal Here</h3>
  </Modal>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

export default connect(mapStateToProps, { switchAddBookMode })(BookFormModal);
