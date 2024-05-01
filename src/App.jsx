// ! TEST : 테스트용 이미지입니다
import Minji from './assets/images/test.png';
import IdolAvatar from './components/IdolAvatar';

function App() {
  return (
    <div>
      <IdolAvatar alt="민지" src={Minji} size="small" />
      <IdolAvatar alt="항상" src={Minji} size="medium" />
      <IdolAvatar alt="화이팅" src={Minji} size="large" />
    </div>
  );
}

export default App;
