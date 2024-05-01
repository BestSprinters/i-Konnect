// ! TEST : 테스트용 이미지입니다
import { useState } from 'react';

import Button from './components/buttons/Button';
import './index.css';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickBtn = () => {
    setIsDisabled(isDisabled);
  };

  return (
    <>
      <Button type="smallSquare">smallSquare</Button>
      <Button type="smallSquare">등록</Button>

      <Button type="smallSquare">mediumSquare</Button>
      <Button type="smallSquare">차트 투표하기</Button>

      <Button type="largeSquare" onClick={onClickBtn}>
        largeSquare
      </Button>
      <Button type="largeSquare" isDisabled={!isDisabled}>
        largeSquare
      </Button>

      <Button type="round">round</Button>

      <Button type="cancel">cancel</Button>
      <Button type="cancel">취소</Button>

      <Button type="more">more</Button>
      <Button type="more">더보기</Button>
    </>
  );
}

export default App;
