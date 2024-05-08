import { useState } from 'react';

import creditIcon from '../assets/imgs/ic_credit.svg';
import Button from './Button';
import Modal from './Modal';

function DonateModal({ open, onClose, donationData }) {
  const { idol, title } = donationData;
  const { profilePicture } = idol;

  const [creditAmount, setCreditAmount] = useState('');

  const handleInputChange = (e) => {
    // TODO: 숫자만 입력되도록 구현 (최대값과 최소값 정하기)
    console.log(e.target.value);
    setCreditAmount(e.target.value);
  };

  // TODO: 후원하기 버튼 누르면 후원 & 갖고 있는 크레딧보다 많으면 오류 표시

  return (
    <Modal title="후원하기" open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col">
          <img
            src={profilePicture}
            alt={`${title} 대표`}
            aria-hidden="true"
            className="h-52 w-40 rounded-lg object-cover"
          />
          <h2 className="mt-2 text-sm font-medium text-whiteSecondary">
            {title}
          </h2>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            className="h-14 w-full rounded-lg border border-whitePrimary bg-white/10 pl-4 pr-12 text-xl font-bold text-whitePrimary placeholder:text-grayDark"
            placeholder="크레딧 입력"
            value={creditAmount}
            onChange={handleInputChange}
          />
          <img
            className="absolute right-4"
            src={creditIcon}
            alt="크레딧 아이콘"
            aria-hidden="true"
          />
        </div>
        <Button type="largeSquare">후원하기</Button>
      </div>
    </Modal>
  );
}

export default DonateModal;
