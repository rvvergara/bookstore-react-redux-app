import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchProgressUpdate } from '../actions/books';

export const ProgressUpdateBtn = ({ switchProgressUpdate, id }) => (
  <button
    className="update-btn update-btn-primary"
    type="button"
    onClick={() => switchProgressUpdate(id)}
  >
    Update Progress
  </button>
);

ProgressUpdateBtn.propTypes = {
  switchProgressUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(null, { switchProgressUpdate })(ProgressUpdateBtn);
