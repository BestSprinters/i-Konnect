// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SponsorSlider() {
  return (
    <div className="px-4">
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={16}
      >
        <SwiperSlide className="bg-white ">
          <div className="h-[500px] w-[300px] text-black">test1</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black">
          <div className="h-[500px] w-[300px] text-black">test2</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SponsorSlider;
