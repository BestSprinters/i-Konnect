import React from 'react';

function Button(props) {
  const { isDisabled, children, onClick, type } = props;
  const buttonValidStyle = {
    disabled:
      'bg-grayMedium cursor-not-allowed rounded-[3px] h-[40px] w-[295px]',
    abled: 'bg-gradient-to-r from-pointOrange to-pointPink',
  };

  const buttonTypeStyle = {
    smallSquare: 'rounded-[5px] py-2 h-[32px] rounded-[2px]',
    largeSquare: 'h-[40px] w-[295px] rounded-[3px]',
    round: 'rounded-3xl h-[48px] w-[255px] text-[16px]',
    cancel: `rounded-[5px] py-2 bg-gradient-to-r from-grayMedium to-grayMedium`,
    more: 'h-[40px] w-[295px] bg-gradient-to-r from-blackSecondary to-blackSecondary rounded-[3px] border border-whiteSecondary-500',
  };

  const buttonValidName = isDisabled
    ? buttonValidStyle.disabled
    : buttonValidStyle.abled;
  const buttonTypeName = type ? buttonTypeStyle[type] : '';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center justify-center px-[16px] text-[13px] font-bold ${buttonValidName} ${buttonTypeName}`}
    >
      {children}
    </button>
  );
}

export default Button;
