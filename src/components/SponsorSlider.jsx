// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SponsorCard from './SponsorCard';

function SponsorSlider({ donations, onReachEnd }) {
  return (
    <div className="mt-4 px-6 tablet:mt-6">
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={150}
        onReachEnd={onReachEnd}
      >
        {donations.map((donation) => (
          <SwiperSlide key={donation.id}>
            <SponsorCard donation={donation} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SponsorSlider;
