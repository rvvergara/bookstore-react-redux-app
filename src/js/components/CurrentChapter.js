import React from 'react';
import PropTypes from 'prop-types';

const CurrentChapter = ({ currentPage }) => (
  <div>
    <p className="current-chapter">CURRENT PAGE</p>
    <p className="current-lesson">
      { currentPage === '' ? 'Not started' : `Chapter ${currentPage}` }
    </p>
  </div>
);

CurrentChapter.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default CurrentChapter;
