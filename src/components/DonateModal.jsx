import { useEffect, useState } from 'react';

import putDonations from '../apis/donations/putDonationsApi';
import creditIcon from '../assets/imgs/ic_credit.svg';
import Button from './Button';
import Modal from './Modal';

function DonateModal({ open, onClose, donationData }) {
  const { id, idol, title } = donationData;
  const { profilePicture } = idol;

  const [creditAmount, setCreditAmount] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const existingCredit = localStorage.getItem('myCredit');

    if (Number(creditAmount) <= Number(existingCredit)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [creditAmount]);

  const handleInputChange = (e) => {
    // 크레딧 입력창에 숫자만 입력 가능
    setCreditAmount(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleButtonClick = async () => {
    // 후원
    await putDonations(id, creditAmount);

    // 후원한 크레딧만큼 로컬 스토리지에서 감소
    const existingCredit = Number(localStorage.getItem('myCredit'));
    localStorage.setItem('myCredit', existingCredit - Number(creditAmount));

    // 크레딧 초기화
    setCreditAmount('');

    onClose();
  };

  return (
    <Modal title="후원하기" open={open} onClose={onClose}>
      <div className="flex flex-col items-center">
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
        <div className="relative mb-10 mt-6 flex items-center justify-center">
          <input
            className={`${disabled ? 'border-red-600 focus-visible:outline-red-600' : 'border-whitePrimary focus-visible:outline-whitePrimary'} h-14 w-full rounded-lg border bg-white/10 pl-4 pr-12 text-xl font-bold text-whitePrimary placeholder:text-grayDark focus-visible:outline focus-visible:outline-1`}
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
          <p
            className={`${!disabled && 'hidden'} absolute -bottom-6 left-0 text-xs font-medium text-red-600`}
          >
            갖고 있는 크레딧보다 더 많이 후원할 수 없어요
          </p>
        </div>
        <Button
          type="largeSquare"
          isDisabled={disabled}
          onClick={handleButtonClick}
        >
          후원하기
        </Button>
      </div>
    </Modal>
  );
}

export default DonateModal;
