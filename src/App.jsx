/* eslint-disable react/jsx-no-useless-fragment */

/* eslint-disable react/jsx-curly-brace-presence */

/* eslint-disable react/button-has-type */
import Button from './components/buttons/Button';
import './index.css';

function App() {
  const onClickBtn = () => [console.log('버튼 클릭')];

  return (
    <>
      <Button onClick={onClickBtn}>버튼</Button>
    </>
  );
}

export default App;
