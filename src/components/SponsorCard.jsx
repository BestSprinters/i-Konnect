import { useContext, useState } from 'react';

import putDonations from '../apis/donations/putDonationsApi';
import icCredit from '../assets/imgs/ic_credit.svg';
import CreditContext from '../contexts/CreditAmount';
import useToggle from '../hooks/useToggle';
import displayTime from '../utils/displayTime';
import formattedNumber from '../utils/formattedNumber';
import Button from './Button';
import DonateModal from './DonateModal';
import ProgressBar from './ProgressBar';

function SponsorCard({ donation }) {
  const [toggle, handleToggle] = useToggle();
  const [receivedDonations, setReceivedDonations] = useState(
    donation.receivedDonations,
  );
  const { creditAmount, setCreditAmount } = useContext(CreditContext);

  const putAndRefetchDonations = async (id, amount) => {
    const data = await putDonations(id, amount);
    setReceivedDonations(data.receivedDonations);
    setCreditAmount(creditAmount - amount);
  };

  const isAchieved = donation.targetDonation <= donation.receivedDonations;

  return (
    <div>
      <div
        className="w-[282px] flex-col items-center justify-center mobile:w-[158px]"
        key={donation.id}
      >
        <div>
          <div
            className="relative h-[293px] w-[283px] overflow-hidden rounded-xl bg-cover bg-center mobile:h-[206px] mobile:w-[158px]"
            style={{
              backgroundImage: `url('${donation.idol.profilePicture}')`,
            }}
          >
            <div
              className={`${isAchieved ? 'bg-blackPrimary/70' : 'bg-gradient-to-b from-transparent to-black'} absolute inset-0 `}
            />
            {isAchieved && (
              <p className="absolute inset-0 flex select-none items-center justify-center text-grayLight">
                🎉 후원을 달성했습니다 🎉
              </p>
            )}
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-[60px] h-[40px] w-[234px] mobile:h-[31px] mobile:w-[142px]">
              <Button
                type="allFullSquarePrimary"
                onClick={handleToggle}
                isDisabled={isAchieved}
              >
                후원하기
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p className="font-regular pt-4 text-[16px] text-grayMedium mobile:text-[12px]">
            {donation.subtitle}
          </p>
          <h3 className="text-[18px] mobile:text-[14px]">{donation.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[12px] text-pointOrange">
              <img src={icCredit} alt="" />
              {formattedNumber(receivedDonations)}
            </div>
            <p className="text-[12px]">
              {displayTime(donation.createdAt, donation.deadline)}
            </p>
          </div>
          <div>
            <ProgressBar
              targetCredit={donation.targetDonation}
              currentCredit={receivedDonations}
            />
          </div>
        </div>
      </div>
      <DonateModal
        open={toggle}
        onClose={handleToggle}
        donationData={donation}
        putAndRefetchDonations={putAndRefetchDonations}
      />
    </div>
  );
}

export default SponsorCard;
