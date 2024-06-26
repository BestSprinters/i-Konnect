import React, { useState } from 'react';

function ChoiceGender({ handleClickChangeGender }) {
  const [gender, setGender] = useState('female');

  const handleClickChangeButtonStyle = (maleOrFemale) => {
    setGender(maleOrFemale);
    handleClickChangeGender(maleOrFemale);
  };
  // border-b bg-white/10
  return (
    <>
      <button
        type="button"
        className={`flex w-full items-center rounded-[3px] ${gender === 'female' ? 'border-b bg-white/20' : 'bg-white/10'} py-2 text-sm font-normal text-whitePrimary hover:bg-white/15`}
        onClick={() => handleClickChangeButtonStyle('female')}
        tabIndex="0"
        aria-label="Change to female"
      >
        <p className={`mx-auto ${gender === 'male' ? 'text-grayMedium' : ''}`}>
          이달의 여자 아이돌
        </p>
      </button>
      <button
        type="button"
        className={`flex w-full items-center rounded-[3px] ${gender === 'male' ? 'border-b bg-white/20' : 'bg-white/10'} py-2 text-sm font-normal text-whitePrimary hover:bg-white/15`}
        onClick={() => handleClickChangeButtonStyle('male')}
        tabIndex="0"
        aria-label="Change to male"
      >
        <p
          className={`mx-auto ${gender === 'female' ? 'text-grayMedium' : ''}`}
        >
          이달의 남자 아이돌
        </p>
      </button>
    </>
  );
}

export default ChoiceGender;
