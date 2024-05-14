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
        blackHover: '#1f2937',

        yellowPrimary: '#D2C030',

        grayLight: '#A3A5A8',
        grayMedium: '#828282',
        grayDark: '#67666E',
        grayBlue: '#8C92AB',
        grayBlack: '#1B1B1BCC',

        whitePrimary: '#FFF',
        whiteSecondary: '#F7F7F8',
        whiteGray: '#F1EEF9CC',

        pointBlue: '#14C3FE',

        pointOrange: '#F96D69',
        pointPink: '#FE5493',

        pointOrangePink: '#F96868',
      },
      fontFamily: {
        sans: ['Pretendard'],
      },
      screens: {
        mobile: { min: "375px", max: "767px" },
        tablet: { min: "768px", max: "1279px" },
        desktop: { min: "1280px" },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};
