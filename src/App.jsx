// ! TEST : 테스트용 이미지입니다
import { useState } from 'react';

import Minji from './assets/images/test.png';
import IdolAvatar from './components/IdolAvatar';
import Button from './components/buttons/Button';
import './index.css';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const types = {
    largeSquare: 'largeSquare',
    smallSquare: 'smallSquare',
    round: 'round',
  };

  const onClickBtn = () => {
    setIsDisabled(isDisabled);
  };

  return (
    <>
      <Button onClick={onClickBtn} type={types.largeSquare}>
        버튼활성화
      </Button>
      <Button onClick={onClickBtn} isDisabled={!isDisabled}>
        버튼비활성화
      </Button>
      <Button type={types.smallSquare}>차트 투표하기</Button>
      <Button type={types.round}>추가하기</Button>

      <div>
        <IdolAvatar alt="민지" src={Minji} size="small" />
        <IdolAvatar alt="항상" src={Minji} size="medium" />
        <IdolAvatar alt="화이팅" src={Minji} size="large" />
      </div>
    </>
  );
}

export default App;
