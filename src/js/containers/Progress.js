import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const Progress = () => {
  const percentage = 66;
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

export default Progress;
