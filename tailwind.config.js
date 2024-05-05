/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blackPrimary: '#02000E',
        blackSecondary: '#181D26',

        yellowPrimary: '#D2C030',

        grayLight: '#A3A5A8',
        grayMedium: '#828282',
        grayDark: '#67666E',
        grayBlue: '#8C92AB',

        whitePrimary: '#FFF',
        whiteSecondary: '#F7F7F8',

        pointOrange: '#F96D69',
        pointPink: '#FE5493',

        pointOrangePink: '#F96868',
      },
      fontFamily: {
        sans: ['Pretendard'],
      },
      screens: {
        sm: { min: "375px", max: "767px" },
        md: { min: "768px", max: "1279px" },
        lg: { min: "1280px" },
      },
    },
  },
  plugins: [],
};
