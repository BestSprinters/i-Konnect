// swiper eslint 충돌

/* eslint-disable react-hooks/exhaustive-deps */

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
    <div className="px-4">
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={16}
        onReachEnd={handleReachEnd}
      >
        {donationData.map((donation) => (
          <SwiperSlide key={donation.id}>
            <SponsorCard donation={donation} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SponsorSlider;
