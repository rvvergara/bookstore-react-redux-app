import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BooksForm from '../containers/BooksForm';

const BooksFormModal = ({ addBookMode, switchAddBookMode }) => (
  <Modal
    isOpen={addBookMode}
    ariaHideApp={false}
    onRequestClose={switchAddBookMode}
  >
    <h3>Add New Book</h3>
    <button
      type="button"
      onClick={switchAddBookMode}
    >
      Cancel
    </button>
    <BooksForm />
  </Modal>
);

BooksFormModal.propTypes = {
  addBookMode: PropTypes.bool.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default BooksFormModal;
