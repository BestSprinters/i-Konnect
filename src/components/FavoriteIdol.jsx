// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/grid';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import deleteImg from '../assets/imgs/ic_delete.svg';
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
    <div className="mt-6 mobile:mx-[24px] tablet:mx-[24px]">
      <h2 className="mb-[32px] text-2xl font-semibold mobile:hidden">
        내가 관심있는 아이돌
      </h2>

      {idols.length === 0 ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            className="mx-auto mb-[15px] fill-grayMedium"
          >
            <path d="M23.85,16.85l-3.15,3.16,3.15,3.13c.2,.19,.2,.51,0,.71-.1,.1-.23,.15-.35,.15s-.25-.05-.35-.15l-3.15-3.13-3.11,3.13c-.1,.1-.23,.15-.35,.15s-.25-.05-.35-.15c-.2-.19-.2-.51,0-.71l3.11-3.13-3.15-3.13c-.2-.19-.2-.51,0-.71,.2-.2,.51-.2,.71,0l3.15,3.13,3.15-3.16c.2-.2,.51-.2,.71,0,.2,.19,.2,.51,0,.71Zm.15-9.35v6c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-5.5H1v10.5c0,1.93,1.57,3.5,3.5,3.5H13.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V5.5C0,3.02,2.02,1,4.5,1h3.03c.39,0,.77,.09,1.12,.26l3.16,1.58c.21,.1,.44,.16,.67,.16h7.03c2.48,0,4.5,2.02,4.5,4.5ZM1,7H22.96c-.24-1.69-1.7-3-3.46-3h-7.03c-.39,0-.77-.09-1.12-.26l-3.16-1.58c-.21-.1-.44-.16-.67-.16h-3.03c-1.93,0-3.5,1.57-3.5,3.5v1.5Z" />
          </svg>

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
              <div className="relative flex w-fit flex-col items-center">
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
