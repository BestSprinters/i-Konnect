// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/grid';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import deleteImg from '../assets/imgs/ic_delete.svg';
import emptyItem from '../assets/imgs/ic_empty_item.svg';
import useMediaQuery from '../hooks/useMediaQuery';
import IdolThumbnail from './IdolThumbnail';

function FavoriteIdol({ idols, onChange }) {
  const removeIdolById = (idToRemove) => {
    // 로컬스토리지에서 데이터 가져오기

    const storedData = localStorage.getItem('MyPage_FavoriteIdol');

    if (!storedData) return; // 데이터가 없으면 함수 종료

    // 가져온 데이터 파싱

    let favoriteIdols = JSON.parse(storedData);

    // 해당 ID를 가진 객체 찾아서 삭제

    favoriteIdols = favoriteIdols.filter((idol) => idol.id !== idToRemove);

    // 수정된 데이터 다시 로컬스토리지에 저장

    localStorage.setItem('MyPage_FavoriteIdol', JSON.stringify(favoriteIdols));

    onChange(favoriteIdols);
  };

  const mobileSize = useMediaQuery('(max-width: 767px)');

  return (
    <div className="mt-6 mobile:mx-[24px] mobile:mt-[40px] tablet:mx-[24px]">
      <h2 className="mb-[32px] text-2xl font-semibold mobile:hidden">
        내가 관심있는 아이돌
      </h2>

      {idols.length === 0 ? (
        <div className="flex min-h-[152px] flex-col justify-center mobile:min-h-[122px]">
          <img
            src={emptyItem}
            alt="아이템이 비어있는 아이콘"
            className="mx-auto mb-[15px]"
          />

          <p className="text-center font-extralight text-grayMedium">
            선택된 관심있는 아이돌이 없습니다
          </p>
        </div>
      ) : (
        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          breakpoints={{
            767: {
              slidesPerView: 6,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="cursor-pointer"
        >
          {idols?.map((idol) => (
            <SwiperSlide key={idol.id}>
              <div className="relative flex w-fit select-none flex-col items-center">
                <button
                  type="button"
                  className="absolute right-0"
                  onClick={() => removeIdolById(idol.id)}
                >
                  <img
                    src={deleteImg}
                    alt="삭제"
                    className={mobileSize ? 'size-[24px]' : 'size-[32px]'}
                  />
                </button>

                <IdolThumbnail
                  size={mobileSize ? 'small' : 'medium'}
                  name={idol.name}
                  group={idol.group}
                  src={idol.profilePicture}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default FavoriteIdol;
