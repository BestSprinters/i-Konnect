const createButtonStyle = (isDisabled) => {
  const buttonTypeStyle = {
    xlargeSquarePrimary: `max-w-[476px] w-full h-[48px] rounded-[3px] ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    fullSquarePrimary: `max-w-[476px] w-full h-[42px] rounded-[3px] ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    fitSquarePrimary: `h-[32px] rounded-[3px] ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    largeSquareBlack: `w-[326px] h-[42px] rounded-[3px] bg-blackSecondary border-whiteSecondary-500 border ${!isDisabled ? '' : 'cursor-not-allowed bg-grayMedium'}`,
    mediumRoundPrimary: `max-w-[256px] w-full h-[48px] rounded-3xl ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
    mediumSqaureBlack: `w-[180px] h-[42px] bg-blackSecondary border-whiteSecondary-500 border ${!isDisabled ? '' : 'cursor-not-allowed bg-grayMedium'}`,
    mediumSquarePrimary: `w-[180px] h-[42px] ${!isDisabled ? 'bg-gradient-to-r from-pointOrange to-pointPink' : 'cursor-not-allowed bg-grayMedium'}`,
  };
  return buttonTypeStyle;
};

export default createButtonStyle;
