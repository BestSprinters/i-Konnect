import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import imgFourthLanding from '../assets/imgs/img_fourth_background.png';
import imgLanding from '../assets/imgs/img_landing.png';
import mainLogo from '../assets/imgs/img_logo.png';
import imgSecondLanding from '../assets/imgs/img_second_background.png';
import imgThirdLanding from '../assets/imgs/img_third_background.png';
import PAGES from '../constants/paths';

function LandingPage() {
  return (
    <main>
      <section
        style={{ '--image-url': `url(${imgLanding})` }}
        className="relative h-[100dvh] w-full overflow-hidden bg-[image:var(--image-url)] bg-cover bg-no-repeat"
      >
        {/* 코너 하늘색 강조 */}
        <div className="absolute -left-[100px] -top-[135px] z-50 h-[270px] w-[200px] bg-gradient-radial from-pointBlue to-blackPrimary opacity-20 blur-2xl" />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: -24,
            transition: { duration: 0.7, ease: 'easeInOut' },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-[10dvw] top-[70dvh] z-[9999] -rotate-[24deg] transition"
        >
          <Link
            to={PAGES.list.link}
            className="z-[9999] text-6xl font-bold text-white transition duration-300 hover:text-pointPink mobile:text-2xl tablet:text-4xl"
          >
            Connect
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mouse-pointer absolute right-0 top-10 mobile:top-5 tablet:top-7"
          >
            <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            <path d="m13 13 6 6" />
          </svg>
        </motion.div>
        <div className="absolute top-0 z-10 size-0 border-r-[108dvw] border-t-[98dvh] border-blackPrimary border-r-transparent" />
        <div className="absolute top-0 size-0 border-r-[110dvw] border-t-[100dvh] border-pointPink border-r-transparent" />
        <div className="absolute bottom-0 right-0 size-0 border-b-[60dvh] border-l-[60dvw] border-blackPrimary border-l-transparent" />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          src={mainLogo}
          alt="logo"
          className="absolute -bottom-0 right-0 z-10 w-[40dvw]"
        />
      </section>
      <section
        style={{ '--image-url': `url(${imgSecondLanding})` }}
        className="relative h-[100dvh] w-full bg-[image:var(--image-url)] bg-contain bg-center bg-no-repeat"
      >
        <div className="absolute right-[5dvw] top-[10dvh] z-20 mobile:right-[1dvw] mobile:top-[1dvh]">
          <p className="text-2xl text-yellowPrimary mobile:text-xs tablet:text-base">
            이달의 아티스트
          </p>
          <h1 className="mt-[2dvh] text-4xl font-bold mobile:text-sm tablet:text-lg">
            좋아하는 아이돌에게 쉽게
            <br /> 조공을 해보세요
          </h1>
        </div>
        <div className="absolute bottom-0 z-10 size-0 border-b-[100dvh] border-r-[28dvw] border-blackPrimary border-r-transparent" />
        <div className="absolute bottom-0 size-0 border-b-[110dvh] border-r-[30dvw] border-pointPink border-r-transparent" />
        <div className="absolute right-0 top-0 z-10 size-0 border-l-[60dvw] border-t-[69dvh] border-blackPrimary border-l-transparent" />
        <div className="absolute right-0 top-0 size-0 border-l-[61dvw] border-t-[70dvh] border-pointPink border-l-transparent" />
      </section>
      <section
        style={{ '--image-url': `url(${imgThirdLanding})` }}
        className="relative h-[100dvh] w-full bg-[image:var(--image-url)] bg-contain bg-right bg-no-repeat"
      >
        <div className="absolute bottom-[10dvh] right-[2dvw] z-20 mobile:bottom-[1dvh] mobile:right-[1dvh]">
          <p className="text-2xl text-yellowPrimary mobile:text-xs tablet:text-base">
            나만의 아티스트
          </p>
          <h1 className="mt-[2dvh] text-4xl font-bold mobile:text-sm tablet:text-lg">
            좋아하는 아티스트들의
            <br /> 소식을 모아보세요
          </h1>
        </div>
        <div className="absolute top-0 z-10 size-0 border-r-[28dvw] border-t-[38dvh] border-blackPrimary border-r-transparent" />
        <div className="absolute top-0 size-0 border-r-[30dvw] border-t-[40dvh] border-pointPink border-r-transparent" />
        <div className="absolute bottom-0 right-0 z-10 size-0 border-b-[69dvh] border-l-[34dvw] border-blackPrimary border-l-transparent" />
        <div className="absolute bottom-0 right-0 size-0 border-b-[70dvh] border-l-[35dvw] border-pointPink border-l-transparent" />
      </section>
      <section className="relative h-[100dvh] w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[5dvh]">
            <p className="text-2xl text-yellowPrimary mobile:text-xs tablet:text-base">
              이달의 아티스트
            </p>
            <h1 className="mt-[2dvh] text-4xl font-bold mobile:text-sm tablet:text-lg">
              내 아티스트에게 1등의
              <br /> 명예를 선물하세요
            </h1>
          </div>
          <img
            src={imgFourthLanding}
            alt="imgFourthLanding"
            className="-z-50 mt-[10dvh] size-[50%] object-cover"
          />
        </div>
        <div className="absolute bottom-0 z-10 size-0 border-b-[8dvh] border-r-[8dvw] border-blackPrimary border-r-transparent" />
        <div className="absolute bottom-0 size-0 border-b-[10dvh] border-r-[10dvw] border-pointPink border-r-transparent" />
        <div className="absolute right-0 top-0 z-10 size-0 border-l-[34dvw] border-t-[29dvh] border-blackPrimary border-l-transparent" />
        <div className="absolute right-0 top-0 size-0 border-l-[35dvw] border-t-[30dvh] border-pointPink border-l-transparent" />
      </section>
      <section className="flex h-[100dvh] w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center font-normal">
          <p className="text-[100px]">커넥팅 완료! ^^</p>
          <h1 className="text-[100px]">
            당신의 <span className="text-[160px] font-bold">아이돌</span>을{' '}
            <span className="text-[160px] font-bold">커넥팅</span>해보세요
            <br />
            영원한 <span className="text-[160px] font-bold">우리</span>{' '}
            <span className="text-[160px] font-bold text-pointPink">오빠</span>
            or
            <span className="text-[160px] font-bold text-pointPink">언니</span>
            or
            <br />
            <span className="text-[160px] font-bold text-pointPink">형</span>or
            <span className="text-[160px] font-bold text-pointPink">누나</span>
            를 덕질해 보세요
          </h1>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
