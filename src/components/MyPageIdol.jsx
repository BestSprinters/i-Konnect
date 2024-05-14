// swiper eslint 충돌

/* eslint-disable import/no-unresolved */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import prevArrow from '../assets/imgs/ic_arrow_left.svg';
import nextArrow from '../assets/imgs/ic_arrow_right.svg';
import icSearch from '../assets/imgs/ic_search.svg';
import useMediaQuery from '../hooks/useMediaQuery';
import insertLocalStorage from '../utils/insertLocalStorage';
import Button from './Button';
import IdolThumbnail from './IdolThumbnail';

function MyPageIdol({ idols, onChange, gender, SearchValue }) {
  const [IsFavorite, setIsFavorite] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedGender, setSelectedGender] = useState('전체');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(SearchValue);
  const prevRef = useRef(null);

  const nextRef = useRef(null);
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

  useEffect(() => {
    const handler = setTimeout(() => {
      SearchValue(debouncedSearchValue);
    }, 300); // 300ms의 딜레이

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchValue]);

  const mobileSize = useMediaQuery('(max-width: 767px)');

  return (
    <div className="mt-[42px] border-t border-[#FFFFFF1A] pt-[42px] mobile:mx-[24px] tablet:px-[24px]">
      <div className="mb-[32px] flex mobile:relative mobile:block">
        <h2 className="grow text-2xl font-semibold mobile:mb-[20px] mobile:text-base tablet:text-[20px]">
          관심있는 아이돌을 추가해보세요.
        </h2>
        <div className="relative mobile:w-full">
          <img
            src={icSearch}
            alt="search icon"
            className="absolute left-2 top-1 h-[24px] w-[24px]"
          />
          <input
            placeholder="검색할 아이돌 이름 혹은 그룹명을 입력해주세요"
            onChange={(e) => setDebouncedSearchValue(e.target.value)}
            className="border-whiteSecondary-500 font-regular h-[32px] w-full min-w-[350px] rounded-[3px] border bg-blackSecondary py-4 pl-9 focus:outline-none mobile:min-w-full mobile:text-[13px]"
          />
        </div>
        <div className="relative ml-[10px] mobile:absolute mobile:-top-[5px] mobile:right-0">
          <button
            type="button"
            onClick={onClickSelect}
            className="border-whiteSecondary-500 flex min-w-[135px] items-center rounded-[5px] border bg-blackSecondary px-[20px] py-[4px] text-grayLight mobile:min-w-fit mobile:px-[10px] mobile:text-[14px] "
          >
            {selectedGender === '전체' ? '아이돌 정렬' : selectedGender}
            <img
              src={prevArrow}
              alt="드롭다운 화살표"
              className="ml-[10px] size-[15px] -rotate-90 opacity-70"
            />
          </button>
          {isDropDown && (
            <ul className="absolute -bottom-[115px] left-0 z-10 min-w-[135px] animate-[dropdown_0.4s_ease] rounded-[5px] border bg-blackSecondary mobile:-bottom-[105px] mobile:min-w-[111px]">
              {selectOptions.map((option) => (
                <li
                  key={option.value}
                  className="w-full border-b text-center text-grayLight hover:bg-pointPink hover:text-white mobile:text-[14px]"
                >
                  <button
                    className="w-full py-[5px]"
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
      </div>
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
          className="absolute top-[50%] z-[50] hidden h-[135px] w-[30px] -translate-y-[50%] cursor-pointer items-center justify-center rounded-md bg-[#1B1B1BCC] tablet:left-[20px] tablet:flex desktop:-left-[60px] desktop:flex"
        >
          <img src={prevArrow} alt="prevArrow" />
        </div>

        <div
          ref={nextRef}
          className="absolute top-[50%] z-[6] hidden h-[135px] w-[30px] -translate-y-[50%] cursor-pointer items-center justify-center rounded-md bg-[#1B1B1BCC] tablet:right-[20px] tablet:flex desktop:-right-[60px] desktop:flex"
        >
          <img src={nextArrow} alt="nextArrow" />
        </div>
      </div>

      <div className="mt-[32px] flex justify-center mobile:mt-0">
        <Button type="mediumRoundPrimary" onClick={addFavoriteIdol}>
          {' '}
          + 추가하기{' '}
        </Button>
      </div>
    </div>
  );
}

export default MyPageIdol;
