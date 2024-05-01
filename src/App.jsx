import MainLogo from './assets/imgs/mainlogo.png';
import NewJeansBackground from './assets/imgs/newjeans.svg';
import LandingSection from './components/landing/LandingSection';

function App() {
  return (
    <main className="relative">
      <div className="absolute -left-[100px] -top-[135px] h-[270px] w-[200px] bg-gradient-radial from-cornerBlue to-blackPrimary opacity-20 blur-2xl" />
      <div className="container mx-auto">
        <section className="relative flex h-dvh flex-col items-center text-2xl font-bold text-white">
          <div className="mt-[100px] md:mt-[120px] lg:mt-[140px]">
            <h1>내가 좋아하는 아이돌을</h1>
            <h1>
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
            className="absolute -z-50 h-full max-w-full rounded-full object-cover opacity-70"
          />
        </section>
        <LandingSection />
        <LandingSection />
        <LandingSection />
      </div>
    </main>
  );
}

export default App;
