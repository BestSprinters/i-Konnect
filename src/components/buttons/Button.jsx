import React from 'react';

function Button(props) {
  const {
    isDisabled, children, onClick, type,
  } = props;
  const baseButtonStyle = 'flex items-center justify-center text-[13px] font-bold px-[16px]';
  const buttonValid = {
    disabled:
      'bg-grayMedium cursor-not-allowed rounded-[3px] h-[40px] w-[295px]',
    abled: 'bg-gradient-to-r from-pointOrange to-pointPink',
  };

  const buttonType = {
    base: 'h-[40px] w-[295px]',
    chartvote: 'h-[32px] w-[128px] rounded-[3px]',
    add: 'rounded-3xl h-[48px] w-[255px] text-[16px]',
  };

  const buttonValidName = isDisabled ? buttonValid.disabled : buttonValid.abled;
  const buttonTypeName = type ? buttonType[type] : '';

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
