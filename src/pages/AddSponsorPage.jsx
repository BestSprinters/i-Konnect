/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import getIdols from '../apis/idols/getIdolsApi';
import toggle from '../assets/imgs/ic_arrow_left.svg';
import Button from '../components/Button';
import IdolAvatar from '../components/IdolAvatar';
import LinkButton from '../components/LinkButton';

function AddSponsorPage() {
  // 아이돌 get 요청
  const [idosData, setIdolsData] = useState([]);

  // 아이돌 리스트 무한
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  // 크레딧 프로그레스 바
  const [output, setOutput] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  // 폼 데이터
  const [datas, setDatas] = useState({
    idolId: '',
    title: '',
    targetDonation: 0,
    deadline: '',
  });

  // get: 리스트 보여주기
  const getIdolsData = async () => {
    setLoading(true);

    const result = await getIdols({ pageSize: 10000 });
    const idolsList = result.list;
    // 기존 아이돌 리스트 뒤에 연달아 나와야 함
    setIdolsData((prevData) => [...prevData, ...idolsList]);
  };

  useEffect(() => {
    getIdolsData();
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(datas);
  };

  return (
    <div className="container mx-auto mt-[80px] flex w-full max-w-[1200px] items-center justify-center">
      <form className="w-full px-8" onSubmit={handleSubmit}>
        <div className="flex gap-4">
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
            className="mySwiper cursor-pointer"
          >
            {idosData.map((idol) => (
              <SwiperSlide>
                <div
                  className="flex flex-col items-center justify-center gap-2"
                  key={idol.id}
                >
                  <IdolAvatar
                    src={idol.profilePicture}
                    size="medium"
                    value={idol.id}
                    onClick={() => {
                      console.log(idol.id);
                      setDatas((prevDatas) => ({
                        ...prevDatas,
                        idolId: idol.id,
                      }));
                    }}
                  />
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
              id="title"
              name="title"
              type="title"
              autoComplete="title"
              className="font-regular block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-span-full my-8">
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            광고 할 지하철 역
          </label>
          <div className="mt-2">
            <ul className="flex w-full">
              <li className="dropdown font-regular group  relative cursor-pointer">
                <p className="align-center flex justify-center rounded-[3px] border border-white p-1 px-2">
                  지하철 역을 선택하세요
                  <img src={toggle} alt="" className="mx-1 -rotate-90" />
                </p>
                <div className="dropdown-menu absolute hidden h-auto group-hover:block">
                  <ul className="w-49 top-0 rounded-[3px] bg-white px-3 py-1 shadow">
                    <li className="py-1">
                      <p className="font-regular block cursor-pointer text-blackPrimary">
                        Item
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
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

        <div className="mt-6 flex items-center justify-end gap-x-6">
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
