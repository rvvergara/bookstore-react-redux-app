import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const Progress = () => {
  const percentage = 66;
  return (
    <div>
      <CircularProgressbar percentage={percentage} />
      <div className="percentage">
        <p>Hello</p>
        <p>hi</p>
      </div>
    </div>
  );
};

export default Progress;
