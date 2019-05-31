import React from 'react';
import PropTypes from 'prop-types';

const CurrentChapter = ({ currentChapter }) => (
  <div>
    <p className="current-chapter">CURRENT CHAPTER</p>
    <p className="current-lesson">
      { currentChapter === '' ? 'Not started' : `Chapter ${currentChapter}` }
    </p>
  </div>
);

CurrentChapter.propTypes = {
  currentChapter: PropTypes.string.isRequired,
};

export default CurrentChapter;
