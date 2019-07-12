import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BooksForm from './BooksForm';

const BooksFormModal = ({ addItemMode, switchAddItemMode }) => (
  <Modal
    isOpen={addItemMode}
    ariaHideApp={false}
    onRequestClose={switchAddItemMode}
    closeTimeoutMS={200}
  >
    <div className="modal-controls">
      <button
        type="button"
        className="cancel-btn"
        onClick={switchAddItemMode}
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
  addItemMode: PropTypes.bool.isRequired,
  switchAddItemMode: PropTypes.func.isRequired,
};

export default BooksFormModal;
