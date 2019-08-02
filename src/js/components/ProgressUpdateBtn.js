import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchProgressUpdate } from '../actions/book';

export const ProgressUpdateBtn = ({ switchProgressUpdate, item_id }) => (
  <button
    className="update-btn update-btn-primary"
    type="button"
    onClick={() => switchProgressUpdate(item_id)}
  >
    Update Progress
  </button>
);

ProgressUpdateBtn.propTypes = {
  switchProgressUpdate: PropTypes.func.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default connect(null, { switchProgressUpdate })(ProgressUpdateBtn);
