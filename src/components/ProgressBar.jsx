/* eslint-disable no-restricted-globals */
import React from 'react';

function ProgressBar({ targetCredit, currentCredit }) {
  let progressBar = Math.ceil((currentCredit / targetCredit) * 100);
  if (isNaN(progressBar)) {
    progressBar = 0;
  }

  return (
    <div>
      <div className="h-[0.1rem] w-full overflow-hidden bg-white">
        <div className={`w-[${progressBar}%] z-50 h-[0.1rem] bg-pointPink`} />
      </div>
    </div>
  );
}

export default ProgressBar;
