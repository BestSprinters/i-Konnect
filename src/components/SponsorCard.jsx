import React, { useEffect, useState } from 'react';

import getDonations from '../apis/donations/getDonationsApi';
import imgCredit from '../assets/imgs/img_credit.svg';
import displayTime from '../utils/displayTime';

function SponsorCard() {
  const [donationsData, setDonationsData] = useState([]);

  const getDonationsData = async () => {
    const result = await getDonations();
    return setDonationsData(result);
  };

  useEffect(() => {
    getDonationsData();
  }, []);

  return (
    <div>
      {donationsData.map((donation) => (
        <div
          className="w-[282px] flex-col items-center justify-center"
          key={donation.id}
        >
          <div>
            <div className="h-[293px] overflow-hidden bg-cover bg-center">
              <img src={donation.idol.profilePicture} alt="아이돌 이미지" />
            </div>
            <div className="relative flex justify-center">
              <button
                type="button"
                className="cursor-point absolute top-[-60px] flex h-[40px] w-[234px] items-center justify-center rounded-[3px] bg-gradient-to-r from-pointOrange to-pointPink px-[16px] text-[13px] font-bold"
              >
                후원하기
              </button>
            </div>
          </div>
          <div>
            <p className="font-regular pt-4 text-[16px] text-grayMedium">
              강남역 광고
            </p>
            <h3 className="text-[18px]">{donation.title}</h3>
            <div className="flex justify-between">
              <div className="flex items-center text-[12px] text-pointOrange">
                <img src={imgCredit} alt="" />
                {donation.receivedDonations}
              </div>
              <p className="text-[12px]">
                {displayTime(donation.createdAt, donation.deadline)}
              </p>
            </div>
            <div>남은 크레딧 양 선</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SponsorCard;
