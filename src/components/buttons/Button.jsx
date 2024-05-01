import React from 'react';

function Button(props) {
  const { isDisabled, children, onClick, type } = props;
  const baseButtonStyle =
    'flex items-center justify-center text-[13px] font-bold px-[16px]';
  const buttonValidStyle = {
    disabled:
      'bg-grayMedium cursor-not-allowed rounded-[3px] h-[40px] w-[295px]',
    abled: 'bg-gradient-to-r from-pointOrange to-pointPink',
  };

  const buttonTypeStyle = {
    largeSquare: 'h-[40px] w-[295px]',
    smallSquare: 'h-[32px] w-[128px] rounded-[3px]',
    round: 'rounded-3xl h-[48px] w-[255px] text-[16px]',
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
      className={`${baseButtonStyle} ${buttonValidName} ${buttonTypeName}`}
    >
      {children}
    </button>
  );
}

export default Button;
