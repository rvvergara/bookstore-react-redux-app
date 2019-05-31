import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProgressUpdateBody from '../containers/ProgressUpdateBody';

const ProgressUpdateModal = (
  {
    bookForProgressUpdate,
    progressUpdateMode,
    switchProgressUpdate,
  },
) => {
  const chaptersArray = Array.from({ length: bookForProgressUpdate.chapters }, (v, k) => k + 1);
  return (
    <Modal
      isOpen={progressUpdateMode.on}
      ariaHideApp={false}
      closeTimeoutMS={200}
      onRequestClose={() => switchProgressUpdate()}
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
      <div className="modal-body">
        <ProgressUpdateBody
          chaptersArray={chaptersArray}
          {...bookForProgressUpdate}
        />
      </div>
    </Modal>
  );
};

ProgressUpdateModal.propTypes = {
  bookForProgressUpdate: PropTypes.instanceOf(Object).isRequired,
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
};

export default ProgressUpdateModal;
