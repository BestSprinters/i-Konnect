/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
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

        cornerBlue: '#14C3FE',

        pointOrange: '#F96D69',
        pointPink: '#FE5493',

        pointOrangePink: '#F96868',
      },
      fontFamily: {
        sans: ['Pretendard'],
      },
    },
  },
  plugins: [],
};
