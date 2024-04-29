/* eslint-disable react/jsx-no-useless-fragment */

/* eslint-disable react/button-has-type */
import React from 'react';

function Button({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex h-[40px] items-center justify-center rounded-[3px] bg-gradient-to-r from-pointOrange to-pointPink px-16 py-2 text-[13px] font-bold"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
