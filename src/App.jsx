// ! TEST : 테스트용 이미지입니다
import { useState } from 'react';

import Button from './components/buttons/Button';
import './index.css';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  const onClick = () => {
    setIsDisabled(false);
  };

  return (
    <>
      <Button type="smallSquare">등록</Button>
      <Button type="smallSquare" isDisabled={!isDisabled} onClick={onClick}>
        등록
      </Button>

      <Button type="smallSquare">차트 투표하기</Button>
      <Button type="smallSquare" isDisabled={!isDisabled}>
        차트 투표하기
      </Button>

      <Button type="largeSquare">largeSquare</Button>
      <Button type="largeSquare" isDisabled={!isDisabled}>
        largeSquare
      </Button>

      <Button type="round">round</Button>
      <Button type="round" isDisabled={!isDisabled}>
        round
      </Button>

      <Button type="cancel">취소</Button>
      <Button type="cancel" isDisabled={!isDisabled}>
        취소
      </Button>

      <Button type="more">더보기</Button>
      <Button type="more" isDisabled={!isDisabled}>
        더보기
      </Button>
    </>
  );
}

export default App;
