// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import getDonations from '../apis/donations/getDonationsApi';
import icArrowLeft from '../assets/imgs/ic_arrow_left.svg';
import icArrowRight from '../assets/imgs/ic_arrow_right.svg';
import SponsorCard from './SponsorCard';

function SponsorPagination() {
  // 화살표 아이콘 이동을 위한 ref
  const swiperRef = useRef(null);

  const [donationData, setDonationData] = useState([]);
  const [nextCursor, setNextCursor] = useState('');

  const fetchOption = {
    cursor: '',
    pageSize: 10,
  };

  // 초기 데이터 로딩
  useEffect(() => {
    const fetchInitialData = async () => {
      const initialFetchOption = {
        cursor: '',
        pageSize: 10,
      };
      try {
        const result = await getDonations(initialFetchOption);
        setDonationData(result.list);
        setNextCursor(result.nextCursor);
      } catch (error) {
        console.error('데이터를 불러오지 못했습니다.', error);
      }
    };

    fetchInitialData();
  }, []);

  // 추가 데이터 로딩
  const handleReachEnd = async () => {
    if (nextCursor) {
      try {
        const newFetchOption = { ...fetchOption, cursor: nextCursor };
        const result = await getDonations(newFetchOption);
        setDonationData((prevData) => [...prevData, ...result.list]);
        setNextCursor(result.nextCursor);
      } catch (error) {
        console.error('추가 데이터를 불러오지 못했습니다.', error);
      }
    }
  };

  return (
    <div className="mt-[40px] md:mt-[64px]">
      <h1 className="text-bold text-2xl">후원을 기다리는 조공</h1>
      <div className="-mx-20 mt-8 flex w-[1360px] items-center justify-center gap-x-10">
        <button
          type="button"
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          className="flex h-[80px] w-[40px] items-center justify-center rounded-md bg-grayBlack"
        >
          <img
            src={icArrowLeft}
            alt="previous arrow"
            className="h-[20px] w-[10px] cursor-pointer"
          />
        </button>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={2}
          modules={[Navigation]}
          ref={swiperRef}
          onReachEnd={handleReachEnd}
          className="flex w-[1280px] items-center justify-center"
        >
          {donationData.map((donation) => (
            <SwiperSlide key={donation.id}>
              <SponsorCard donation={donation} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          className="flex h-[80px] w-[40px] items-center justify-center rounded-md bg-grayBlack"
        >
          <img
            src={icArrowRight}
            alt="next arrow"
            className="h-[20px] w-[10px] cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export default SponsorPagination;
