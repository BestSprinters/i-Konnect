import imgFourthLanding from '../assets/imgs/img_fourth_background.png';
import imgLanding from '../assets/imgs/img_landing.png';
import mainLogo from '../assets/imgs/img_logo.png';
import imgSecondLanding from '../assets/imgs/img_second_background.png';
import imgThirdLanding from '../assets/imgs/img_third_background.png';

function LandingPage() {
  return (
    <main>
      <section
        style={{ '--image-url': `url(${imgLanding})` }}
        className="relative h-[100dvh] w-full overflow-hidden bg-[image:var(--image-url)] bg-cover bg-no-repeat"
      >
        <div className="absolute top-0 z-10 size-0 border-r-[108dvw] border-t-[98dvh] border-blackPrimary border-r-transparent" />
        <div className="absolute top-0 size-0 border-r-[110dvw] border-t-[100dvh] border-pointPink border-r-transparent" />
        <div className="absolute bottom-0 right-0 size-0 border-b-[60dvh] border-l-[60dvw] border-blackPrimary border-l-transparent" />
        <img
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
      <section className="relative h-[100dvh] w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[10dvh]">
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
            className="mt-[10dvh] size-[60%] object-cover"
          />
        </div>
        <div className="absolute bottom-0 z-10 size-0 border-b-[8dvh] border-r-[8dvw] border-blackPrimary border-r-transparent" />
        <div className="absolute bottom-0 size-0 border-b-[10dvh] border-r-[10dvw] border-pointPink border-r-transparent" />
        <div className="absolute right-0 top-0 z-10 size-0 border-l-[34dvw] border-t-[29dvh] border-blackPrimary border-l-transparent" />
        <div className="absolute right-0 top-0 size-0 border-l-[35dvw] border-t-[30dvh] border-pointPink border-l-transparent" />
      </section>
    </main>
  );
}

export default LandingPage;
