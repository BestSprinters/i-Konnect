import { useContext, useState } from 'react';

import icCredit from '../assets/imgs/ic_credit.svg';
import icRadioChecked from '../assets/imgs/ic_radio_checked.svg';
import icRadioUnchecked from '../assets/imgs/ic_radio_unchecked.svg';
import icWhiteCredit from '../assets/imgs/ic_white_credit.svg';
import CreditContext from '../contexts/CreditAmount';
import Button from './Button';
import Modal from './Modal';

const chargeAmountList = [100, 500, 1000, 3000, 5000];

function ChargeCreditModal({ open, onClose }) {
  const [chargeAmount, setChargeAmount] = useState(0);

  // 컨텍스트를 이용하여 렌더링 할 credit을 추가하였습니다
  const { setCreditAmount } = useContext(CreditContext);

  // TODO: util 함수로 분리해내는 리팩토링 필요
  const chargeCredit = () => {
    const existingCredit = Number(localStorage.getItem('myCredit')) ?? 0;
    localStorage.setItem('myCredit', existingCredit + chargeAmount);
    // 컨텍스트를 이용하여 렌더링 할 credit을 추가하였습니다
    setCreditAmount(existingCredit + chargeAmount);
  };

  const handleModalClosed = () => {
    setChargeAmount(0);
    onClose();
  };

  const handleChargeButtonClick = () => {
    chargeCredit();
    handleModalClosed();
  };

  return (
    <Modal title="크레딧 충전하기" open={open} onClose={handleModalClosed}>
      <div className="mb-6 flex w-full flex-col gap-2">
        {chargeAmountList.map((amount) => (
          <CreditOption
            amount={amount}
            key={amount}
            isSelected={chargeAmount === amount}
            onSelect={() => setChargeAmount(amount)}
          />
        ))}
      </div>
      <Button type="fullSquarePrimary" onClick={handleChargeButtonClick}>
        <img src={icWhiteCredit} alt="크레딧 아이콘" />
        충전하기
      </Button>
    </Modal>
  );
}

function CreditOption({ isSelected, amount, onSelect }) {
  const handleClick = () => {
    onSelect();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSelect();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${isSelected ? 'border-pointOrange hover:outline-pointOrange focus-visible:outline-pointOrange' : 'border-whiteSecondary hover:outline-whiteSecondary focus-visible:outline-whiteSecondary'} flex w-full cursor-pointer items-center justify-center rounded-lg border px-5 py-4 hover:outline hover:outline-1 focus:outline-2 focus-visible:outline focus-visible:outline-2`}
      role="button"
      tabIndex={0}
    >
      <img src={icCredit} alt="크레딧 아이콘" />
      <p
        className={`${isSelected ? 'text-whitePrimary' : 'text-grayMedium'} ml-1 grow text-xl font-bold`}
      >
        {amount}
      </p>
      <img
        src={isSelected ? icRadioChecked : icRadioUnchecked}
        className="h-4 w-4"
        alt="라디오 버튼"
      />
    </div>
  );
}

export default ChargeCreditModal;
