import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProgressUpdateBody from './ProgressUpdateBody';

const ProgressUpdateModal = (
  {
    itemForProgressUpdate,
    progressUpdateMode,
    switchProgressUpdate,
  },
) => {
  const pagesArray = Array.from({ length: itemForProgressUpdate.page_count }, (v, k) => k + 1);
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
          pagesArray={pagesArray}
          {...itemForProgressUpdate}
        />
      </div>
    </Modal>
  );
};

ProgressUpdateModal.propTypes = {
  itemForProgressUpdate: PropTypes.instanceOf(Object).isRequired,
  progressUpdateMode: PropTypes.instanceOf(Object).isRequired,
  switchProgressUpdate: PropTypes.func.isRequired,
};

export default ProgressUpdateModal;
