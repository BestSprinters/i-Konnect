// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import insertLocalStorage from '../utils/insertLocalStorage';
import IdolThumbnail from './IdolThumbnail';
import Button from './Button';

function MyPageIdol({ idols, onChange }) {
  const [IsFavorite, setIsFavorite] = useState([]);

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
    const localData = insertLocalStorage('myPage_FavoriteIdol', IsFavorite);

    // 상위 컴포넌트에 선택된 아이돌의 데이터 보내줌
    onChange(localData);
    setIsFavorite([]);
  };

  return (
    <div>
      <h2 className="mb-[32px] text-2xl font-semibold">
        관심있는 아이돌을 추가해보세요.
      </h2>
      <Swiper
        slidesPerView={8}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
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
                size="large"
                checked={IsFavorite.includes(idol)}
                name={idol.name}
                group={idol.group}
                src={idol.profilePicture}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-[32px] flex justify-center">
        <Button type="round" onClick={addFavoriteIdol}>
          {' '}
          + 추가하기{' '}
        </Button>
      </div>
    </div>
  );
}

export default MyPageIdol;
