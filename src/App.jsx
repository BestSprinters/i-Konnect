// ! TEST : 테스트용 이미지입니다
import Minji from './assets/images/test.png';
import IdolAvatar from './components/IdolAvatar';

function App() {
  return (
    <div>
      <IdolAvatar alt="민지" src={Minji} size="s" />
      <IdolAvatar alt="항상" src={Minji} size="m" />
      <IdolAvatar alt="화이팅" src={Minji} size="l" />
    </div>
  );
}

export default App;
