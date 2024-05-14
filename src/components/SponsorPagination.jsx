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
import useToggle from '../hooks/useToggle';
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

  const [isOnlyFavorite, toggleOnlyFavorite] = useToggle(false);

  // 초기 데이터 로딩
  useEffect(() => {
    const fetchData = async () => {
      const FetchOption = {
        cursor: '',
        pageSize: isOnlyFavorite ? 10000 : 10,
      };

      const { list: donations, nextCursor: donationsNextCursor } =
        await getDonations(FetchOption);

      if (isOnlyFavorite) {
        const favoriteIdols = JSON.parse(
          localStorage.getItem('MyPage_FavoriteIdol'),
        );
        const favoriteIdolIds = favoriteIdols.map(
          (favoriteIdol) => favoriteIdol.id,
        );
        const filteredDonations = donations.filter((donation) =>
          favoriteIdolIds.includes(donation.idol.id),
        );

        setDonationData(filteredDonations);
      } else {
        setDonationData(donations);
        setNextCursor(donationsNextCursor);
      }
    };

    fetchData();
  }, [isOnlyFavorite]);

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
    <div className="mt-[40px] tablet:mt-[64px]">
      <div className="flex items-end justify-between">
        <h1 className="text-bold text-2xl">후원을 기다리는 조공</h1>
        <div className="flex items-center justify-center">
          <label
            className="inline-flex cursor-pointer items-center"
            htmlFor="toggle"
          >
            <span className="mr-3 text-sm font-medium text-whitePrimary">
              내가 관심있는 아이돌
            </span>
            <input
              type="checkbox"
              value={isOnlyFavorite}
              onClick={toggleOnlyFavorite}
              className="peer sr-only"
              id="toggle"
            />
            <div className="peer relative h-6 w-11 rounded-full border-gray-600 bg-gray-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-whitePrimary after:bg-whitePrimary after:transition-all after:content-[''] peer-checked:bg-pointOrangePink peer-checked:after:translate-x-full peer-checked:after:border-whitePrimary peer-focus:outline-none peer-focus:ring-[3px] peer-focus:ring-pointOrangePink/40 rtl:peer-checked:after:-translate-x-full" />
          </label>
        </div>
      </div>
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
