import React from 'react';

function Button(props) {
  const { isDisabled = false, children, onClick, type } = props;

  const buttonTypeStyle = {
    smallSquare: `h-[32px] rounded-[2px] rounded-[5px] py-2 ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    largeSquare: `h-[40px] w-[295px] rounded-[3px] ${!isDisabled ? 'cursor-point bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    round: `h-[48px] w-[255px] rounded-3xl text-[16px] ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    cancel: `rounded-[5px] bg-grayMedium py-2 ${!isDisabled ? '' : 'cursor-not-allowed'}`,
    more: `border-whiteSecondary-500 h-[40px] w-[295px] rounded-[3px] border bg-blackSecondary ${!isDisabled ? '' : 'cursor-not-allowed'}`,
  };

  const buttonTypeName = type ? buttonTypeStyle[type] : '';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`cursor-point flex items-center justify-center px-[16px] text-[13px] font-bold ${buttonTypeName}`}
    >
      {children}
    </button>
  );
}

export default Button;
