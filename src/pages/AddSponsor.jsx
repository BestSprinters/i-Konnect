/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function AddSponsor() {
  return (
    <div className="container mx-auto mt-[80px] flex w-full max-w-[1200px] items-center justify-center">
      <form className="mx-8 w-full">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
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
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-whitePrimary"
            >
              제목
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full my-8">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-whitePrimary"
            >
              내용
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            취소
          </button>
          <button
            type="submit"
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSponsor;
