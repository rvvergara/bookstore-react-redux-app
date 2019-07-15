import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import CollectionItemForm from './CollectionItemForm';

const CollectionItemFormModal = ({ addBookMode, switchAddBookMode }) => (
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
      <CollectionItemForm />
    </div>
  </Modal>
);

CollectionItemFormModal.propTypes = {
  addBookMode: PropTypes.bool.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default CollectionItemFormModal;
