/* eslint-disable import/no-unresolved */
// Import Swiper styles
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import imgFourthLanding from '../assets/imgs/img_fourth_background.png';
import imgLanding from '../assets/imgs/img_landing_banner.jpeg';
import imgSecondLanding from '../assets/imgs/img_mainDonation.png';
import mainLogo from '../assets/imgs/img_mainlogo.png';
import imgThirdLanding from '../assets/imgs/img_third_background.png';
import InnerAnimation from '../components/InnerAnimation';
import PAGES from '../constants/paths';

function LandingPage() {
  return (
    <main>
      <InnerAnimation>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel
          threshold={100}
          scrollbar={{ draggable: true }}
          modules={[Mousewheel]}
          className="h-[100vh]"
        >
          <SwiperSlide>
            <section className="relative h-full overflow-hidden">
              <div className="absolute -left-[50%] -top-[115%] h-[150%] w-[200%] -rotate-[25deg] border-b-[20px] border-pointPink bg-blackPrimary mobile:-left-[75%] mobile:-top-[130%] tablet:-top-[120%]">
                <Link
                  to={PAGES.list.link}
                  className="group absolute bottom-[1%] left-[25%] z-[3] flex text-6xl font-bold text-white transition ease-in-out hover:text-pointPink mobile:left-[20%]"
                >
                  Connect
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
                    className="tran translate-x-[10px] translate-y-[35px] transition ease-in-out group-hover:translate-x-[-10px]"
                  >
                    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    <path d="m13 13 6 6" />
                  </svg>
                </Link>
              </div>
              <img
                src={imgLanding}
                alt="배너 이미지"
                className="absolute left-[1%] top-[5%] -z-[1] w-[120%] -rotate-[28deg] scale-[1.2] mobile:top-[20%] mobile:scale-[1.4] tablet:left-[0%] tablet:top-[20%] tablet:scale-[1.3]"
              />
              <img
                src={mainLogo}
                alt="로고이미지"
                className="absolute -right-[7%] bottom-0 z-[3] scale-[0.7] mobile:-right-[10%] tablet:-right-[20%] tablet:scale-[0.5]"
              />
              <div className="absolute -bottom-[140%] -right-[50%] h-[150%] w-[200%] -rotate-[30deg] bg-black mobile:-bottom-[90%] mobile:left-[20%] tablet:-bottom-[130%]">
                <span className="hidden">.</span>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="relative h-full overflow-hidden">
              <div className="absolute right-[5dvw] top-[10dvh] z-20 mobile:right-[3dvw] mobile:top-[8dvh] mobile:top-auto tablet:right-[2dvw]">
                <p className="text-2xl text-yellowPrimary mobile:text-xs tablet:text-base">
                  후원하기
                </p>
                <h1 className="mt-[2dvh] text-4xl font-bold mobile:text-sm tablet:text-lg">
                  좋아하는 아이돌에게 쉽게
                  <br /> 조공을 해보세요
                </h1>
              </div>

              <img
                src={imgSecondLanding}
                alt="후원을 기다리는 조공 이미지"
                className="absolute left-[53%] top-[55%] -z-[1] translate-x-[-50%] translate-y-[-50%] scale-[0.8]"
              />
              <div className="absolute bottom-0 z-10 size-0 border-b-[100dvh] border-r-[28dvw] border-blackPrimary border-r-transparent mobile:border-b-[114dvh] mobile:border-r-[40dvw]" />
              <div className="absolute bottom-0 size-0 border-b-[107dvh] border-r-[30dvw] border-pointPink border-r-transparent mobile:border-b-[121dvh] mobile:border-r-[43dvw]" />
              <div className="absolute right-0 top-0 z-10 size-0 border-l-[61.4dvw] border-t-[70.4dvh] border-blackPrimary border-l-transparent mobile:border-l-[41.3dvw] mobile:border-t-[40.3dvh] tablet:border-l-[40.5dvw] tablet:border-t-[42.5dvh]" />
              <div className="absolute right-0 top-0 size-0 border-l-[61.5dvw] border-t-[70.5dvh] border-pointPink border-l-transparent mobile:border-l-[41.5dvw] mobile:border-t-[40.5dvh] tablet:border-l-[40.6dvw] tablet:border-t-[42.6dvh]" />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="relative h-full overflow-hidden">
              <div className="absolute bottom-[3dvh] right-[2dvw] z-20 mobile:bottom-[5dvh] mobile:right-[2dvh]">
                <p className="text-2xl text-yellowPrimary mobile:text-xs tablet:text-base">
                  나만의 아티스트
                </p>
                <h1 className="mt-[2dvh] text-4xl font-bold mobile:text-sm tablet:text-lg">
                  좋아하는 아티스트들의
                  <br /> 소식을 모아보세요
                </h1>
              </div>

              <img
                src={imgThirdLanding}
                alt="후원을 기다리는 조공 이미지"
                className="absolute left-[53%] top-[55%] -z-[1] translate-x-[-50%] translate-y-[-50%] scale-[0.8]"
              />
              <div className="absolute top-0 z-10 size-0 border-r-[28dvw] border-t-[37dvh] border-blackPrimary border-r-transparent mobile:border-r-[32dvw] mobile:border-t-[38dvh] tablet:border-r-[35dvw] tablet:border-t-[42dvh]" />
              <div className="absolute top-0 size-0 border-r-[30dvw] border-t-[40dvh] border-pointPink border-r-transparent mobile:border-r-[35dvw] mobile:border-t-[42dvh] tablet:border-r-[37dvw] tablet:border-t-[45dvh]" />
              <div className="absolute bottom-0 right-0 z-10 size-0 border-b-[69.3dvh] border-l-[34.4dvw] border-blackPrimary border-l-transparent" />
              <div className="absolute bottom-0 right-0 size-0 border-b-[69.5dvh] border-l-[34.5dvw] border-pointPink border-l-transparent" />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="relative h-[100dvh] w-full overflow-hidden">
              <div className="flex flex-col items-center justify-center">
                <div className="mt-[5dvh] text-center mobile:mt-[20dvh]">
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
                  className="-z-50 mt-[10dvh] size-[50%] object-cover mobile:size-[100%] tablet:size-[70%]"
                />
              </div>
              <div className="absolute bottom-0 z-10 size-0 border-b-[12dvh] border-r-[11dvw] border-blackPrimary border-r-transparent" />
              <div className="absolute bottom-0 size-0 border-b-[14dvh] border-r-[13dvw] border-pointPink border-r-transparent" />
              <div className="absolute right-0 top-0 z-10 size-0 border-l-[35.6dvw] border-t-[30.6dvh] border-blackPrimary border-l-transparent" />
              <div className="absolute right-0 top-0 size-0 border-l-[35.7vw] border-t-[30.7dvh] border-pointPink border-l-transparent" />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex h-[100dvh] w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center text-[100px] font-normal mobile:text-[30px] tablet:text-[60px]">
                {/* 기본 a태그처럼 만들기 */}
                <Link
                  to={PAGES.list.link}
                  className="font-dosGothic text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                >
                  커넥팅 완료! (´▽`ʃ♡ƪ)
                </Link>
                <h1 className="font-dosGothic">
                  당신의{' '}
                  <span className="font-dosGothic text-[160px] mobile:text-[35px] tablet:text-[90px]">
                    아이돌
                  </span>
                  을{' '}
                  <span className="font-dosGothic text-[160px] mobile:text-[40px] tablet:text-[90px]">
                    커넥팅
                  </span>
                  해보세요
                  <br />
                  영원한{' '}
                  <span className="font-dosGothic text-[160px] mobile:text-[40px] tablet:text-[90px]">
                    우리
                  </span>{' '}
                  <span className="font-dosGothic text-[160px] text-pointPink mobile:text-[40px] tablet:text-[90px]">
                    오빠
                  </span>
                  or
                  <span className="font-dosGothic text-[160px] text-pointPink mobile:text-[40px] tablet:text-[90px]">
                    언니
                  </span>
                  or
                  <br />
                  <span className="font-dosGothic text-[160px] text-pointPink mobile:text-[40px] tablet:text-[90px]">
                    형
                  </span>
                  or
                  <span className="font-dosGothic text-[160px] text-pointPink mobile:text-[40px] tablet:text-[90px]">
                    누나
                  </span>
                  를 덕질해 보세요
                </h1>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </InnerAnimation>
    </main>
  );
}

export default LandingPage;
