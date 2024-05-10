/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import postDonationsApi from '../apis/donations/postDonationsApi';
import getIdols from '../apis/idols/getIdolsApi';
import icCalendar from '../assets/imgs/ic_calender.svg';
import icCredit from '../assets/imgs/ic_credit.svg';
import icSearch from '../assets/imgs/ic_search.svg';
import Button from '../components/Button';
import CheckedIdolAvatar from '../components/CheckedIdolAvatar';
import Header from '../components/Header';
import IdolAvatar from '../components/IdolAvatar';
import LinkButton from '../components/LinkButton';

function AddSponsorPage() {
  // 아이돌 get 요청
  const [idolsData, setIdolsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 크레딧 프로그레스 바
  const [output, setOutput] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);

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
  const dateRef = useRef(null);

  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

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
      await postDonationsApi(datas);
      alert('조공 등록이 완료되었습니다!');
      navigate('/list');
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

  const showCalendar = () => {
    dateRef.current.showPicker();
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-[80px] flex w-full max-w-[1200px] items-center justify-between">
        <form className="w-full px-8" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <p className="font-bold">조공 추가하기</p>
            <div className="relative my-4">
              <img
                src={icSearch}
                alt="search icon"
                className="absolute left-2 top-1 h-[24px] w-[24px]"
              />
              <input
                placeholder="조공할 아이돌을 검색해 보세요"
                onChange={handleKeywordSearch}
                className="border-whiteSecondary-500 font-regular h-[32px] w-[300px] rounded-[8px] border bg-blackSecondary px-9 py-2 focus:outline-none"
              />
            </div>
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
            <div className="mt-2">
              <input
                placeholder="제목"
                ref={titleRef}
                id="title"
                name="title"
                type="text"
                autoComplete
                className="font-regular block w-full rounded-md bg-blackSecondary px-4 py-2 text-white placeholder:text-grayLight focus:outline-none sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-span-full my-8">
            <div className="mt-2">
              <textarea
                placeholder="내용"
                ref={subtitleRef}
                id="subtitle"
                name="subtitle"
                rows={3}
                className="font-regular block h-[10rem] w-full resize-none rounded-md bg-blackSecondary px-4 py-2 text-white placeholder:text-grayLight focus:outline-none sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-span-full my-8">
            <div className="flex items-center justify-between gap-8">
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium leading-6 text-whitePrimary"
                >
                  조공 마감 날짜
                </label>
                <div className="relative mt-2">
                  <input
                    name="deadline"
                    type="date"
                    className="font-regular w-[10rem] rounded-md bg-blackSecondary px-4 py-2 text-sm text-white focus:outline-none"
                    onChange={handleInputChange}
                    ref={dateRef}
                    onClick={showCalendar}
                  />
                  <img
                    src={icCalendar}
                    alt=""
                    className="absolute left-[7.8rem] top-[0.4rem] cursor-pointer"
                    onClick={showCalendar}
                  />
                </div>
              </div>
              <div className="w-full flex-1 justify-stretch">
                <div className="flex justify-between">
                  <label className="text-sm font-medium leading-6 text-whitePrimary">
                    필요 후원 크레딧
                  </label>
                  <div className="flex items-center justify-center">
                    <img src={icCredit} alt="" className="ml-4" />
                    <output
                      htmlFor="credit"
                      className="pointer-events-none relative text-center text-sm font-medium text-white"
                    >
                      {output}
                    </output>
                  </div>
                </div>
                <input
                  onChange={handleInputChange}
                  type="range"
                  name="targetDonation"
                  id="credit"
                  value={output}
                  min={min}
                  step="100"
                  max={max}
                  className="m-0 h-1 w-full appearance-none rounded-full bg-grayLight outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pointOrange"
                />
                <div className="mt-2 flex justify-between pl-2">
                  <p className="font-regular text-[12px] text-grayLight">0</p>
                  <p className="font-regular text-[12px] text-grayLight">
                    최대 1,000,000 크레딧
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-6">
            <LinkButton
              to="/list"
              type="more"
              className="cursor-point border-whiteSecondary-500 flex items-center justify-center rounded-[3px] border bg-blackSecondary px-[16px] py-1.5 text-[13px] font-bold transition-all hover:bg-grayDark"
            >
              취소
            </LinkButton>

            <Button type="largeSquare" onClick={handleSubmit}>
              등록
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddSponsorPage;
