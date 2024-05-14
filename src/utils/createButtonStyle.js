const createButtonStyle = (isDisabled) => {
  const buttonTypeStyle = {
    xlargeSquarePrimary: `max-w-[476px] w-full h-[48px] rounded-[3px] ${!isDisabled ? 'transition-all duration-500 bg-pos-0 hover:bg-pos-100 bg-size-200 bg-gradient-to-r from-pointOrange via-pointPink to-pointOrange hover:scale-105' : 'cursor-not-allowed bg-grayMedium'}`,
    fullSquarePrimary: `w-full h-[42px] rounded-[3px] ${!isDisabled ? 'transition-all duration-500 bg-pos-0 hover:bg-pos-100 bg-size-200 bg-gradient-to-r from-pointOrange via-pointPink to-pointOrange hover:scale-105' : 'cursor-not-allowed bg-grayMedium'}`,
    allFullSquarePrimary: `w-full h-full rounded-[3px] ${!isDisabled ? 'transition-all duration-500 bg-pos-0 hover:bg-pos-100 bg-size-200 bg-gradient-to-r from-pointOrange via-pointPink to-pointOrange hover:scale-105' : 'cursor-not-allowed bg-grayMedium'}`,
    fitSquarePrimary: `h-[32px] rounded-[3px] ${!isDisabled ? 'transition-all duration-500 bg-pos-0 hover:bg-pos-100 bg-size-200 bg-gradient-to-r from-pointOrange via-pointPink to-pointOrange hover:scale-105' : 'cursor-not-allowed bg-grayMedium'}`,
    largeSquareBlack: `w-[326px] h-[42px] rounded-[3px] bg-blackSecondary border-whiteSecondary-500 border hover:bg-blackHover transition duration-500 ${!isDisabled ? '' : 'cursor-not-allowed bg-grayMedium'}`,
    mediumRoundPrimary: `max-w-[256px] w-full h-[48px] rounded-3xl ${!isDisabled ? 'transition-all duration-500 bg-pos-0 hover:bg-pos-100 bg-size-200 bg-gradient-to-r from-pointOrange via-pointPink to-pointOrange hover:scale-105' : 'cursor-not-allowed bg-grayMedium'}`,
    mediumSqaureBlack: `w-[180px] h-[42px] bg-blackSecondary border-whiteSecondary-500 border rounded-[3px] hover:bg-blackHover transition duration-500 ${!isDisabled ? '' : 'cursor-not-allowed bg-grayMedium'}`,
    mediumSqaurePrimary: `w-[180px] h-[42px] rounded-[3px] ${!isDisabled ? 'transition-all duration-500 bg-pos-0 hover:bg-pos-100 bg-size-200 bg-gradient-to-r from-pointOrange via-pointPink to-pointOrange hover:scale-105' : 'cursor-not-allowed bg-grayMedium'}`,
  };
  return buttonTypeStyle;
};

export default createButtonStyle;
