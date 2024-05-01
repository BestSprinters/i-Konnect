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
      <Button onClick={onClickBtn} type={types.largeSquare}>
        버튼활성화
      </Button>
      <Button onClick={onClickBtn} isDisabled={!isDisabled}>
        버튼비활성화
      </Button>
      <Button type={types.smallSquare}>차트 투표하기</Button>
      <Button type={types.round}>추가하기</Button>
    </>
  );
}

export default App;
