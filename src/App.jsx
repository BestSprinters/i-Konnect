import { useState } from 'react';

import Button from './components/buttons/Button';
import './index.css';
import types from './types';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickBtn = () => {
    setIsDisabled(isDisabled);
  };

  return (
    <>
      <Button type={types.smallSquare}>smallSquare</Button>
      <Button type={types.smallSquare}>등록</Button>

      <Button type={types.mediumSquare}>mediumSquare</Button>
      <Button type={types.mediumSquare}>차트 투표하기</Button>

      <Button type={types.largeSquare} onClick={onClickBtn}>
        largeSquare
      </Button>
      <Button type={types.largeSquare} isDisabled={!isDisabled}>
        largeSquare
      </Button>

      <Button type={types.round}>round</Button>

      <Button type={types.cancel}>cancel</Button>
      <Button type={types.cancel}>취소</Button>

      <Button type={types.more}>more</Button>
      <Button type={types.more}>더보기</Button>
    </>
  );
}

export default App;
