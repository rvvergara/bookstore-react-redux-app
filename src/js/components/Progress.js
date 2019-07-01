import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';

const Progress = ({ currentChapter, chapters }) => {
  const percentage = Math.round((currentChapter / chapters) * 100, 2);
  return (
    <div className="progress-body">
      <div className="progress-bar">
        <CircularProgressbar percentage={percentage} />
      </div>
      <div className="progress-percentage">
        <p className="percent-complete">{`${percentage}%`}</p>
        <p className="completed">Completed</p>
      </div>
    </div>
  );
};

Progress.propTypes = {
  currentChapter: PropTypes.number.isRequired,
  chapters: PropTypes.number.isRequired,
};

export default Progress;
