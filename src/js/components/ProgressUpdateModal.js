import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ProgressUpdateModal = ({ progressUpdateMode, switchProgressUpdate }) => (
  <Modal
    isOpen={progressUpdateMode.on}
    ariaHideApp={false}
    closeTimeoutMS={200}
  >
    <div className="modal-controls">
      <button
        type="button"
        className="cancel-btn"
        onClick={() => switchProgressUpdate()}
      >
        X
      </button>
    </div>
  </Modal>
);

ProgressUpdateModal.propTypes = {
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
};

export default ProgressUpdateModal;
