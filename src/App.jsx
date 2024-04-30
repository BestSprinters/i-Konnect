import MainLogo from './assets/imgs/mainlogo.png';
import NewJeansBackground from './assets/imgs/newjeans.svg';

function App() {
  return (
    <main className="relative">
      <div className="absolute -left-[120px] -top-[150px] h-[270px] w-[200px] bg-gradient-radial from-cornerBlue to-blackPrimary opacity-20 blur-2xl" />
      <div className="container mx-auto">
        <div className="relative flex h-dvh flex-col items-center text-[26px] font-bold text-white">
          <div className="mt-[100px] md:mt-[120px] lg:mt-[140px]">
            <p>내가 좋아하는 아이돌을</p>
            <p>
              가장 <span className="text-pointOrange">쉽게 덕질</span> 하는 방법
            </p>
          </div>
          <img
            src={MainLogo}
            alt="main logo"
            className="h-[100px] w-[500px] object-cover"
          />
          <img
            src={NewJeansBackground}
            alt="new jeans"
            className="absolute -z-50 mt-60 size-[300px] rounded-full opacity-70 md:size-[600px] lg:mt-0 lg:size-[900px] lg:p-[100px]"
          />
        </div>
        <div className="h-dvh">
          <h1>Hi</h1>
        </div>
        <div className="h-dvh">
          <h1>Hi</h1>
        </div>
        <div className="h-dvh">
          <h1>Hi</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
