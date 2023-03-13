import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';

const Progress = ({ currentPage, pages }) => {
  const percentage = Math.round((currentPage / pages) * 100, 2);
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
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default Progress;
