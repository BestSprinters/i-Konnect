// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import icArrowLeft from '../assets/imgs/ic_arrow_left.svg';
import icArrowRight from '../assets/imgs/ic_arrow_right.svg';
import SponsorCard from './SponsorCard';

function SponsorPagination({ donations, onReachEnd }) {
  // 화살표 아이콘 이동을 위한 ref
  const swiperRef = useRef(null);

  return (
    <div className="-mx-20 mt-3 flex w-[1360px] items-center justify-center gap-x-10">
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
        onReachEnd={onReachEnd}
        className="flex w-[1280px] items-center justify-center"
      >
        {donations.map((donation) => (
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
  );
}

export default SponsorPagination;
