import React from 'react';

import imgCredit from '../assets/imgs/ic_credit.svg';

function MyCredit() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className="mx-6 mt-[100px] flex h-[87px] items-center justify-between rounded-lg border border-whiteGray p-[20px] md:h-[131px] md:px-16 md:py-9 xl:mx-0 xl:mt-[130px]">
      <div className="flex flex-col gap-y-2">
        <p className="text-xs text-white opacity-60 md:text-base">내 크레딧</p>
        <div className="flex items-center gap-x-1">
          <img src={imgCredit} alt="크레딧 이미지" className="size-6" />
          {/* TODO : 크레딧 구현 */}
          <p className="text-xl font-bold text-white opacity-[0.87] md:text-2xl">
            100,000
          </p>
        </div>
      </div>
      <button
        type="button"
        className="text-sm font-bold text-pointOrange md:text-base"
        onClick={handleClick}
      >
        충전하기
      </button>
    </div>
  );
}

export default MyCredit;
