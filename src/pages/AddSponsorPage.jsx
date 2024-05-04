/* eslint-disable import/extensions */

/* eslint-disable import/no-unresolved */

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import getIdols from '../apis/idols/getIdolsApi';
import IdolAvatar from '../components/IdolAvatar';
import Button from '../components/buttons/Button';

// import axiosInstance from '../apis/axiosInstance';

function AddSponsorPage() {
  const [idosData, setIdolsData] = useState([]);

  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const onChangeInput = (e) => {
    const val = e.target.value;
    setValue(val);
    setMin(e.target.min || 0);
    setMax(e.target.max || 1000000);
  };

  // get: 리스트 보여주기
  const getIdolsData = async () => {
    const result = await getIdols();
    const idolsList = result.list;
    setIdolsData(idolsList);
  };
  useEffect(() => {
    getIdolsData();
  }, []);

  // // post: 데이터 추가하기
  // const addData = async () => {
  //   try {
  //     const response = await axiosInstance.post(`/donations`, data)
  //   } catch(error) {
  //     console.log('데이터 추가하는 데 에러가 발생했습니다', error)
  //   }
  // }

  return (
    <div className="container mx-auto mt-[80px] flex w-full max-w-[1200px] items-center justify-center">
      <form className="mx-8 w-full">
        <div className="flex gap-4">
          {idosData.map((idol) => (
            <IdolAvatar src={idol.profilePicture} size="medium" />
          ))}
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
            />
          </div>
        </div>

        <div className="col-span-full my-8">
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            내용
          </label>
          <div className="mt-2">
            <textarea
              id="content"
              name="content"
              rows={3}
              className="font-regular block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
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
              type="date"
              className="font-regular rounded-md px-2 py-1.5 pl-2 text-sm text-black focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-full my-8">
          <label className="block text-sm font-medium leading-6 text-whitePrimary">
            필요한 크레딧
          </label>
          <div className="mt-2 flex w-full items-center justify-center">
            <input
              onChange={onChangeInput}
              type="range"
              name="credit"
              id="credit"
              value={value}
              min={min}
              step="10"
              max={max}
              className="m-0 h-1 w-full appearance-none rounded-full bg-gradient-to-r from-white via-pointOrange to-pointPink p-0 shadow-none outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pointOrange"
            />
            <output
              htmlFor="credit"
              className="pointer-events-none relative ml-1 w-6 text-center text-sm font-medium text-white"
            >
              {value}
            </output>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="cursor-point border-whiteSecondary-500 flex items-center justify-center rounded-[3px] border bg-blackSecondary px-[16px] py-1.5 text-[13px] font-bold transition-all hover:bg-grayDark"
          >
            취소
          </button>

          <Button type="smallSquare">등록</Button>
        </div>
      </form>
    </div>
  );
}

export default AddSponsorPage;
