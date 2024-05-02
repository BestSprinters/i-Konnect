import React from 'react';

import imgCredit from '../assets/imgs/img_credit.svg';
import Button from './buttons/Button';

function SponsorCard() {
  return (
    <div className="h-[402px] w-min flex-col items-center justify-center">
      <div>
        <img src="" alt="아이돌 이미지" />
        <div>
          <Button type="largeSquare">후원하기</Button>
        </div>
      </div>
      <div>
        <p className="font-regular text-[16px] text-grayMedium">강남역 광고</p>
        <h3 className="text-[18px]">제목</h3>
        <div className="flex justify-between">
          <div className="flex items-center text-[12px] text-pointOrange">
            <img src={imgCredit} alt="" />
            6000
          </div>
          <p className="text-[12px]">5일 남음</p>
        </div>
        <div>남은 크레딧 양 선</div>
      </div>
    </div>
  );
}

export default SponsorCard;
