const createButtonStyle = (isDisabled) => {
  const buttonTypeStyle = {
    smallSquare: `h-[32px] rounded-[3px] py-2 ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    largeSquare: `h-[40px] w-[295px] rounded-[3px] ${!isDisabled ? 'cursor-point bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    round: `h-[48px] w-[255px] rounded-3xl text-[16px] ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    cancel: `rounded-[3px] bg-grayMedium py-2 ${!isDisabled ? '' : 'cursor-not-allowed'}`,
    more: `border-whiteSecondary-500 h-[40px] w-[295px] rounded-[3px] border bg-blackSecondary ${!isDisabled ? '' : 'cursor-not-allowed'}`,
  };

  return buttonTypeStyle;
};

export default createButtonStyle;
