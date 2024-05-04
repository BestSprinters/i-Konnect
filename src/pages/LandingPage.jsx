import MainLogo from '../assets/imgs/img_logo.png';
import ItzyBackground from '../assets/imgs/itzy.png';
import LandingPreviewImage from '../assets/imgs/landingPreviewImage.svg';
import LucyBackground from '../assets/imgs/lucy.png';
import NewJeansBackground from '../assets/imgs/newjeans.png';
import UkissBackground from '../assets/imgs/ukiss.png';
import LandingSection from '../components/LandingSection';
import LinkButton from '../components/LinkButton';

function LandingPage() {
  return (
    <main className="relative">
      <div className="absolute -left-[100px] -top-[135px] -z-10 h-[270px] w-[200px] bg-gradient-radial from-pointBlue to-blackPrimary opacity-20 blur-2xl" />
      <div className="px-2 text-2xl font-bold text-white">
        <section className="relative flex h-dvh flex-col items-center">
          <div className="mt-[100px] text-center md:mt-[120px] xl:mt-[140px]">
            <h1>
              내가 좋아하는 아이돌을
              <br />
              가장 <span className="text-pointOrange">쉽게 덕질</span> 하는 방법
            </h1>
          </div>
          <img
            src={MainLogo}
            alt="main logo"
            className="h-[100px] w-[500px] object-cover"
          />
          <img
            src={ItzyBackground}
            alt="main background"
            className="absolute top-1/2 -z-50 h-[80%] -translate-y-1/2 rounded-md object-cover opacity-70"
          />
          <div className="absolute bottom-[100px] md:bottom-[120px]">
            <LinkButton to="/list" type="largeSquare">
              지금 시작하기
            </LinkButton>
          </div>
        </section>
        {/* previewImage 수정 필요 */}
        <LandingSection
          backgroundImageAlt="first section background"
          backgroundImage={NewJeansBackground}
          previewImageAlt="first preview image"
          previewImage={LandingPreviewImage}
          title="후원하기"
        >
          <h1>
            좋아하는 아이돌에게
            <br />
            쉽게 조공해 보세요
          </h1>
        </LandingSection>
        <LandingSection
          backgroundImageAlt="second section background"
          backgroundImage={LucyBackground}
          previewImageAlt="second preview image"
          previewImage={LandingPreviewImage}
          title="이달의 아티스트"
        >
          <h1>
            내 아티스트에게 1등의
            <br />
            영예를 선물하세요
          </h1>
        </LandingSection>
        <LandingSection
          backgroundImageAlt="third section background"
          backgroundImage={UkissBackground}
          previewImageAlt="third preview image"
          previewImage={LandingPreviewImage}
          title="나만의 아티스트"
        >
          <h1>
            좋아하는 아티스트의
            <br />
            소식을 모아보세요
          </h1>
        </LandingSection>
      </div>
    </main>
  );
}

export default LandingPage;
