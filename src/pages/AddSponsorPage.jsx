/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import postDonationsApi from '../apis/donations/postDonationsApi';
import getIdols from '../apis/idols/getIdolsApi';
import searchIcon from '../assets/imgs/ic_search.svg';
import Button from '../components/Button';
import CheckedIdolAvatar from '../components/CheckedIdolAvatar';
import IdolAvatar from '../components/IdolAvatar';
import IdolThumbnail from '../components/IdolThumbnail';
import LinkButton from '../components/LinkButton';

function AddSponsorPage() {
  // 아이돌 get 요청
  const [idolsData, setIdolsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 크레딧 프로그레스 바
  const [output, setOutput] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  // 폼 데이터
  const [datas, setDatas] = useState({
    idolId: '',
    title: '',
    subtitle: '',
    targetDonation: 0,
    deadline: '',
  });

  const titleRef = useRef();
  const subtitleRef = useRef();

  const [keyword, setKeyword] = useState('');

  // get: 리스트 보여주기
  const getIdolsData = async () => {
    setLoading(true);

    const result = await getIdols({ pageSize: 10000, keyword });
    const idolsList = result.list;
    // 기존 아이돌 리스트 뒤에 연달아 나와야 함
    setIdolsData(idolsList);
  };

  useEffect(() => {
    getIdolsData();
  }, [keyword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'targetDonation') {
      const val = e.target.value;
      setOutput(val);
      setMin(e.target.min || 0);
      setMax(e.target.max || 1000000);
    }

    setDatas((prevDatas) => ({
      ...prevDatas,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      datas.idolId &&
      datas.title &&
      datas.subtitle &&
      datas.targetDonation &&
      datas.deadline
    ) {
      console.log('Form data:', datas);
      await postDonationsApi(datas);
    } else if (!datas.idolId) {
      alert('아이돌은 선택해주세요!');
    } else if (!datas.title) {
      titleRef.current.focus();
    } else if (!datas.subtitle) {
      subtitleRef.current.focus();
    } else if (!datas.deadline) {
      alert('마감일을 설정해주세요!');
    } else if (datas.targetDonation === 0) {
      alert('크레딧을 설정해주세요!');
    }
  };

  const handleKeywordSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="container mx-auto mt-[80px] flex w-full max-w-[1200px] items-center justify-center">
      <form className="w-full px-8" onSubmit={handleSubmit}>
        <div className="relative my-4 flex-1">
          <img
            src={searchIcon}
            alt="search icon"
            className="absolute left-2 top-1 h-[24px] w-[24px]"
          />
          <input
            placeholder="검색할 아이돌 이름 혹은 그룹명을 입력해주세요"
            onChange={handleKeywordSearch}
            className="border-whiteSecondary-500 font-regular h-[32px] w-full rounded-[3px] border bg-blackSecondary px-9 py-2 focus:outline-none"
          />
        </div>

        <div>
          <Swiper
            slidesPerView={8}
            spaceBetween={1}
            breakpoints={{
              375: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 1,
              },
              1280: {
                slidesPerView: 10,
                spaceBetween: 1,
              },
            }}
            className="mySwiper cursor-pointer overflow-visible"
          >
            {idolsData.map((idol) => (
              <SwiperSlide key={idol.id}>
                <div
                  className="flex flex-col items-center justify-center gap-2"
                  key={idol.id}
                >
                  {datas.idolId === idol.id ? (
                    <CheckedIdolAvatar
                      src={idol.profilePicture}
                      size="medium"
                      value={idol.id}
                    />
                  ) : (
                    <IdolAvatar
                      src={idol.profilePicture}
                      size="medium"
                      value={idol.id}
                      onClick={() => {
                        setDatas((prevDatas) => ({
                          ...prevDatas,
                          idolId: idol.id,
                        }));
                      }}
                    />
                  )}
                  <p>{idol.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-full my-8">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            제목
          </label>
          <div className="mt-2">
            <input
              ref={titleRef}
              id="title"
              name="title"
              type="title"
              autoComplete="title"
              className="font-regular block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:outline-pointPink sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-span-full my-8">
          <label
            htmlFor="subtitle"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            내용
          </label>
          <div className="mt-2">
            <textarea
              ref={subtitleRef}
              id="subtitle"
              name="subtitle"
              rows={3}
              className="font-regular block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:outline-pointPink sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-span-full my-8">
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            마감일
          </label>
          <div className="mt-2">
            <input
              name="deadline"
              type="date"
              className="font-regular rounded-md px-2 py-1.5 pl-2 text-sm text-black focus:outline-none"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-span-full my-8">
          <label className="block text-sm font-medium leading-6 text-whitePrimary">
            필요한 크레딧
          </label>
          <div className="mt-2 flex w-full items-center justify-center">
            <input
              onChange={handleInputChange}
              type="range"
              name="targetDonation"
              id="credit"
              value={output}
              min={min}
              step="100"
              max={max}
              className="m-0 h-1 w-full appearance-none rounded-full bg-gradient-to-r from-white via-pointOrange to-pointPink p-0 shadow-none outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pointOrange"
            />
            <output
              htmlFor="credit"
              className="pointer-events-none relative ml-1 w-6 text-center text-sm font-medium text-white"
            >
              {output}
            </output>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <LinkButton
            to="/list"
            type="cancel"
            className="cursor-point border-whiteSecondary-500 flex items-center justify-center rounded-[3px] border bg-blackSecondary px-[16px] py-1.5 text-[13px] font-bold transition-all hover:bg-grayDark"
          >
            취소
          </LinkButton>

          <Button type="smallSquare" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddSponsorPage;
