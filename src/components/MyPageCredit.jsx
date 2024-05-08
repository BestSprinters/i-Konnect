import { useEffect, useState } from 'react';

import credit from '../assets/imgs/img_credit.svg';

function MyPageCredit() {
  const [credits, setCredits] = useState();
  // const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에 저장된 크레딧 가져오기
    const MyCredit = JSON.parse(localStorage.getItem('myCredit')) || 0;
    setCredits(MyCredit.toLocaleString('ko-KR'));
  }, [credits]);

  return (
    <>
      <div className="mb-[50px] rounded-[8px] border border-[#F1EEF9CC] px-[78px] py-[30px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-[8px] text-grayMedium">내 크레딧</p>
            <div className="-ml-[10px] flex">
              <img src={credit} alt="크레딧 이미지" className="size-[32px]" />
              <h3 className="text-2xl font-semibold">{credits}</h3>
            </div>
          </div>
          <div>
            {/*
            <button
              type="button"
              className="font-bold text-pointOrange"
              onClick={() => setModalOpen(true)}
            >
              충전하기
            </button>
            */}
          </div>
        </div>
      </div>
      {
        // <ChargeCreditModal open={modalOpen} onClose={() => setModalOpen(false)} />
      }
    </>
  );
}
export default MyPageCredit;
