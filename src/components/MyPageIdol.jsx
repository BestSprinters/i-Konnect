// swiper eslint 충돌

/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import insertLocalStorage from '../utils/insertLocalStorage';
import Button from './Button';
import IdolThumbnail from './IdolThumbnail';

function MyPageIdol({ idols, onChange, gender, SearchValue }) {
  const [IsFavorite, setIsFavorite] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedGender, setSelectedGender] = useState('전체');
  const selectOptions = [
    { value: '', label: '전체' },
    { value: 'male', label: '남자 아이돌' },
    { value: 'female', label: '여자 아이돌' },
  ];
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

  // 드롭다운 클릭 시
  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  // 선택된 옵션을 처리하는 함수
  const selectOption = (label, value) => {
    setSelectedGender(label);
    gender(value);
    setIsDropDown(false); // 옵션 선택 후 드롭다운 닫기
  };

  const insertValue = (e) => {
    SearchValue(e.target.value);
  };
  return (
    <div>
      <h2 className="mb-[32px] text-2xl font-semibold">
        관심있는 아이돌을 추가해보세요.
      </h2>
      <div>
        <button type="button" onClick={onClickSelect}>
          {selectedGender === '전체' ? '아이돌 정렬' : selectedGender}
        </button>
        {isDropDown && (
          <ul>
            {selectOptions.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => selectOption(option.label, option.value)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <input type="text" onChange={insertValue} />
      </div>
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
