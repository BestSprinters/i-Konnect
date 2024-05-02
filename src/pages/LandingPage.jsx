import { Link } from 'react-router-dom';

import GirlsGenerationBackground from '../assets/imgs/girls_generation.png';
import LandingPreviewImage from '../assets/imgs/landingPreviewImage1.svg';
import MainLogo from '../assets/imgs/main_logo.png';
import NewJeansBackground from '../assets/imgs/newjeans.svg';
import RedVelvetBackground from '../assets/imgs/red_velvet.png';
// TODO : 누구..신지...아시는분 알려주세요..
import WhoAreTheyBackground from '../assets/imgs/who_are_they.png';
import LandingSection from '../components/LandingSection';
import Button from '../components/buttons/Button';

function LandingPage() {
  return (
    <main className="relative">
      <div className="absolute -left-[100px] -top-[135px] h-[270px] w-[200px] bg-gradient-radial from-cornerBlue to-blackPrimary opacity-20 blur-2xl" />
      <div className="text-2xl font-bold text-white">
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
          <div className="absolute bottom-[100px] md:bottom-[120px]">
            {/* Todo : 다른 분들은 Link + Button 어떻게 쓰시는 지 궁금합니다. */}
            <Link to="/list">
              <Button type="largeSquare">지금 시작하기</Button>
            </Link>
          </div>
          {/* TODO : 레드벨벳 제공된 사진이 배경화면과 맞지 않는 이슈가 있습니다. */}
          {/* 최대한 피그마에 있는 이미지를 사용하여 만들려고 했습니다. */}
          <img
            src={RedVelvetBackground}
            alt="main background"
            className="absolute top-1/2 -z-50 h-[80%] -translate-y-1/2 object-cover opacity-70"
          />
        </section>
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
          backgroundImage={WhoAreTheyBackground}
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
          backgroundImage={GirlsGenerationBackground}
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
