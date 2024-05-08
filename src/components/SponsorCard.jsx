import imgCredit from '../assets/imgs/ic_credit.svg';
import displayTime from '../utils/displayTime';
import ProgressBar from './ProgressBar';

function SponsorCard({ donation }) {
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          </div>
          <div className="relative flex justify-center">
            <button
              type="button"
              className="cursor-point absolute top-[-60px] flex h-[40px] w-[234px] items-center justify-center rounded-[3px] bg-gradient-to-r from-pointOrange to-pointPink px-[16px] text-[13px] font-bold mobile:h-[31px] mobile:w-[142px]"
            >
              후원하기
            </button>
          </div>
        </div>
        <div>
          <p className="font-regular pt-4 text-[16px] text-grayMedium mobile:text-[12px]">
            강남역 광고
          </p>
          <h3 className="text-[18px] mobile:text-[14px]">{donation.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[12px] text-pointOrange">
              <img src={imgCredit} alt="" />
              {donation.receivedDonations}
            </div>
            <p className="text-[12px]">
              {displayTime(donation.createdAt, donation.deadline)}
            </p>
          </div>
          <div>
            <ProgressBar
              targetCredit={donation.targetDonation}
              currentCredit={donation.receivedDonations}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorCard;
