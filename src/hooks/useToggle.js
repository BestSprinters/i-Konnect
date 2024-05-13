import { useState } from 'react';

// 모달열고 닫는 훅. 인자 암것도 안주면 기본적으로 false, 즉 닫힌상태
// Modal컴포넌트 기준 onClose에 handleToggle 주고, open에 toggle주면됨
const useToggle = (initialToggle) => {
  const [toggle, setToggle] = useState(initialToggle ?? false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return [toggle, handleToggle];
};

export default useToggle;
