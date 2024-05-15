import React, { useContext } from 'react';

import icCredit from '../assets/imgs/ic_credit.svg';
import CreditContext from '../contexts/CreditAmount';
import useToggle from '../hooks/useToggle';
import formattedNumber from '../utils/formattedNumber';
import ChargeCreditModal from './ChargeCreditModal';

function MyCredit() {
  const [toggle, handleToggle] = useToggle();
  const { creditAmount } = useContext(CreditContext);

  return (
    <div className="mt-[100px] flex h-[87px] items-center justify-between rounded-lg border border-whiteGray p-[20px] mobile:mx-6 tablet:mx-6">
      <div className="flex flex-col gap-y-2">
        <p className="text-xs text-white opacity-60">내 크레딧</p>
        <div className="flex items-center gap-x-1">
          <img src={icCredit} alt="크레딧 이미지" className="size-6" />
          {/* TODO : 크레딧 구현 */}
          <p className="text-xl font-bold text-white opacity-[0.87]">
            {formattedNumber(creditAmount)}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="rounded-md px-4 py-3 text-sm font-bold text-pointOrange transition hover:bg-whiteSecondary/20 focus:bg-whiteSecondary/30 tablet:text-base"
        onClick={handleToggle}
      >
        충전하기
      </button>
      <ChargeCreditModal open={toggle} onClose={handleToggle} />
    </div>
  );
}

export default MyCredit;
