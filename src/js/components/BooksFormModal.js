import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BooksForm from './BooksForm';

const BooksFormModal = ({ addBookMode, switchAddBookMode }) => (
  <Modal
    isOpen={addBookMode}
    ariaHideApp={false}
    onRequestClose={switchAddBookMode}
    closeTimeoutMS={200}
  >
    <div className="modal-controls">
      <button
        type="button"
        className="cancel-btn"
        onClick={switchAddBookMode}
      >
        X
      </button>
    </div>
    <div className="modal-body">
      <BooksForm />
    </div>
  </Modal>
);

BooksFormModal.propTypes = {
  addBookMode: PropTypes.bool.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default BooksFormModal;
