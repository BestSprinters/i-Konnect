import LandingPreviewImage from './assets/imgs/landingPreviewImage1.svg';
import MainLogo from './assets/imgs/main_logo.png';
import NewJeansBackground from './assets/imgs/newjeans.svg';
import LandingSection from './components/LandingSection';

function App() {
  return (
    <main className="relative">
      <div className="absolute -left-[100px] -top-[135px] h-[270px] w-[200px] bg-gradient-radial from-cornerBlue to-blackPrimary opacity-20 blur-2xl" />
      <div className="text-2xl font-bold text-white">
        <section className="relative flex h-dvh flex-col items-center">
          <div className="mt-[100px] text-center md:mt-[120px] lg:mt-[140px]">
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
            src={NewJeansBackground}
            alt="new jeans"
            className="absolute top-1/2 -z-50 max-w-full -translate-y-1/2 rounded-full object-cover opacity-70"
          />
        </section>
        <LandingSection
          backgroundImageAlt="뉴진스"
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
          backgroundImageAlt="뉴진스"
          backgroundImage={NewJeansBackground}
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
          backgroundImageAlt="뉴진스"
          backgroundImage={NewJeansBackground}
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

export default App;
