import React from 'react';

function ProgressBar({ targetCredit, currentCredit }) {
  // 현재 크레딧의 퍼센티지 계산
  let progressBar = Math.ceil((currentCredit / targetCredit) * 100);
  if (Number.isNaN(progressBar)) {
    progressBar = 0;
  }

  // 퍼센티지를 직접 스타일 속성에 할당하여 동적으로 변경
  const progressStyle = {
    width: `${progressBar}%`,
  };

  return (
    <div>
      <div className="relative h-[0.1rem] w-full overflow-hidden bg-white">
        <div className="z-50 h-[0.1rem] bg-pointPink" style={progressStyle} />
      </div>
    </div>
  );
}

export default ProgressBar;
