// swiper eslint 충돌

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable import/no-unresolved */
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import getDonations from '../apis/donations/getDonationsApi';
import leftArrow from '../assets/imgs/btn_pagination_arrow_left.svg';
import rightArrow from '../assets/imgs/btn_pagination_arrow_right.svg';
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

  const getDonationData = async () => {
    const result = await getDonations(fetchOption);
    setDonationData(result.list);
    setNextCursor(result.nextCursor);
  };

  useEffect(() => {
    getDonationData();
  }, []);

  const handleReachEnd = async () => {
    if (nextCursor) {
      fetchOption.cursor = nextCursor;
      const result = await getDonations(fetchOption);
      setDonationData((prev) => [...prev, ...result.list]);
      setNextCursor(result.nextCursor);
    }
  };

  return (
    <div className="mx-auto mt-[300px] flex max-w-[1280px] items-center justify-center gap-x-2">
      <button
        type="button"
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
        className="flex h-[80px] w-[40px] items-center justify-center rounded-md bg-grayBlack"
      >
        <img
          src={leftArrow}
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
          src={rightArrow}
          alt="next arrow"
          className="h-[20px] w-[10px] cursor-pointer"
        />
      </button>
    </div>
  );
}

export default SponsorPagination;
