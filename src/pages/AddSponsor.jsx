/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Button from '../components/buttons/Button';

function AddSponsor() {
  return (
    <div className="container mx-auto mt-[80px] flex w-full max-w-[1200px] items-center justify-center">
      <form className="mx-8 w-full">
        <label
          htmlFor="idol-photo"
          className="block text-sm font-medium leading-6 text-whitePrimary"
        >
          아이돌 이미지
        </label>
        <div className="mt-2 flex h-[300px] w-[300px] items-center justify-center rounded-lg border border-dashed border-whitePrimary/25 px-5 py-10">
          <div className="text-center">
            <div className="mt-4 flex-row text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white p-2 font-semibold"
              >
                <span className="text-blackPrimary">파일 업로드</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="m-4">파일을 끌어다 놓으세요</p>
            </div>
          </div>
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
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            지하철 역
          </label>
          <div className="mt-2">ha..</div>
        </div>

        <div className="col-span-full my-8">
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-whitePrimary"
          >
            필요한 크레딧
          </label>
          <div className="mt-2">선 해가지구 설정하기</div>
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

export default AddSponsor;
