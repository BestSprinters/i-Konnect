/* eslint-disable react/self-closing-comp */
import { useState } from 'react';

import Button from './components/buttons/Button';
import './index.css';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const types = {
    base: 'base',
    chartvote: 'chartvote',
    add: 'add',
  };

  const onClickBtn = () => {
    setIsDisabled(isDisabled);
  };

  return (
    <>
      <Button onClick={onClickBtn} type={types.base}>
        버튼활성화
      </Button>
      <Button onClick={onClickBtn} isDisabled={!isDisabled}>
        버튼비활성화
      </Button>
      <Button type={types.chartvote}>차트 투표하기</Button>
      <Button type={types.add}>추가하기</Button>
    </>
  );
}

export default App;
