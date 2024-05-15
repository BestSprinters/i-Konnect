// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import prevArrow from '../assets/imgs/ic_arrow_left.svg';
import nextArrow from '../assets/imgs/ic_arrow_right.svg';
import useMediaQuery from '../hooks/useMediaQuery';
import insertLocalStorage from '../utils/insertLocalStorage';
import Button from './Button';
import IdolThumbnail from './IdolThumbnail';

function MyPageIdol({ idols, onChange }) {
  const [IsFavorite, setIsFavorite] = useState([]);

  const prevRef = useRef(null);

  const nextRef = useRef(null);

  const handleIdolToggle = (idol) => {
    // 아이돌이 선택된건지 선택 해제하는건지 확인

    if (IsFavorite.includes(idol)) {
      // 이미 선택된 아이돌을 다시 선택했으면 선택 해제이므로 IsFavorite에서 해당 아이돌을 제외

      setIsFavorite(IsFavorite.filter((data) => data.id !== idol.id));
    } else {
      // 한 번 선택된 아이돌은 IsFavorite에 추가

      setIsFavorite([...IsFavorite, idol]);
    }
  };

  const addFavoriteIdol = () => {
    // 로컬 스토리지에 선택된 아이돌 저장

    const localData = insertLocalStorage('MyPage_FavoriteIdol', IsFavorite);

    // 상위 컴포넌트에 선택된 아이돌의 데이터 보내줌

    onChange(localData);

    setIsFavorite([]);
  };

  const mobileSize = useMediaQuery('(max-width: 767px)');

  return (
    <div className="mt-[42px] border-t border-[#FFFFFF1A] pt-[42px] mobile:mx-[24px] mobile:px-[0] tablet:px-[70px]">
      <h2 className="mb-[32px] text-2xl font-semibold">
        관심있는 아이돌을 추가해보세요.
      </h2>
      <div className="relative">
        <div className="tablet:px-[60px]">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={12}
            navigation={{
              prevEl: prevRef.current,

              nextEl: nextRef.current,
            }}
            breakpoints={{
              767: {
                slidesPerView: 4,

                spaceBetween: 20,

                grid: {
                  rows: 2,
                },
              },

              1024: {
                slidesPerView: 6,

                spaceBetween: 20,

                grid: {
                  rows: 2,
                },
              },

              1280: {
                slidesPerView: 8,

                spaceBetween: 20,

                grid: {
                  rows: 2,
                },
              },
            }}
            modules={[Grid, Navigation]}
            className="h-[400px]"
          >
            {idols?.map((idol) => (
              <SwiperSlide key={idol.id}>
                <button
                  type="button"
                  onClick={() => handleIdolToggle(idol)}
                  aria-label={`${idol.name} 썸네일`}
                >
                  <IdolThumbnail
                    size={mobileSize ? 'medium' : 'large'}
                    checked={IsFavorite.includes(idol)}
                    name={idol.name}
                    group={idol.group}
                    src={idol.profilePicture}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          ref={prevRef}
          className="absolute top-[50%] z-[50] hidden h-[135px] w-[30px] -translate-y-[50%] cursor-pointer select-none items-center justify-center rounded-md bg-[#1B1B1BCC] transition hover:bg-whiteSecondary/20 tablet:left-[20px] tablet:flex desktop:-left-[60px] desktop:flex"
        >
          <img src={prevArrow} alt="prevArrow" />
        </div>

        <div
          ref={nextRef}
          className="absolute top-[50%] z-[6] hidden h-[135px] w-[30px] -translate-y-[50%] cursor-pointer select-none items-center justify-center rounded-md bg-[#1B1B1BCC] transition hover:bg-whiteSecondary/20 tablet:right-[20px] tablet:flex desktop:-right-[60px] desktop:flex"
        >
          <img src={nextArrow} alt="nextArrow" />
        </div>
      </div>

      <div className="mt-[32px] flex justify-center">
        <Button type="mediumRoundPrimary" onClick={addFavoriteIdol}>
          {' '}
          + 추가하기{' '}
        </Button>
      </div>
    </div>
  );
}

export default MyPageIdol;
