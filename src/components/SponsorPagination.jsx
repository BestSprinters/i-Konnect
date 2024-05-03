// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import leftArrow from '../assets/imgs/btn_pagination_arrow_left.svg';
import rightArrow from '../assets/imgs/btn_pagination_arrow_right.svg';

function SponsorPagination() {
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto flex w-[1280px]">
      <button
        type="button"
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
      >
        <img
          src={leftArrow}
          alt="previous arrow"
          className="size-[100px] cursor-pointer"
        />
      </button>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        modules={[Navigation]}
        ref={swiperRef}
      >
        <SwiperSlide className="bg-white">
          <div className="size-[500px]">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <button
        type="button"
        onClick={() => {
          swiperRef.current.swiper.slideNext();
        }}
      >
        <img
          src={rightArrow}
          alt="next arrow"
          className="size-[100px] cursor-pointer"
        />
      </button>
    </div>
  );
}

export default SponsorPagination;
