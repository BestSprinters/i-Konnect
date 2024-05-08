// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import getDonations from '../apis/donations/getDonationsApi';
import SponsorCard from './SponsorCard';

function SponsorSlider() {
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
    <div className="mt-10 md:mt-16">
      <h1 className="text-bold mx-6 text-base md:text-xl">
        후원을 기다리는 조공
      </h1>
      <div className="mt-4 md:mt-6">
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={4}
          onReachEnd={handleReachEnd}
        >
          {donationData.map((donation) => (
            <SwiperSlide key={donation.id}>
              <SponsorCard donation={donation} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SponsorSlider;
