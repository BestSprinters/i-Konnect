import { useEffect, useMemo, useState } from 'react';

import Chart from '../components/Chart';
import Header from '../components/Header';
import MyCredit from '../components/MyCredit';
import SponsorPagination from '../components/SponsorPagination';
import SponsorSlider from '../components/SponsorSlider';
import CreditContext from '../contexts/CreditAmount';
import useMediaQuery from '../hooks/useMediaQuery';

function ListPage() {
  const [creditAmount, setCreditAmount] = useState();
  const tabletSize = useMediaQuery('(max-width: 1280px)');
  useEffect(() => {
    setCreditAmount(localStorage.getItem('myCredit'));
  }, []);
  return (
    <div className="desktop:base-container">
      <Header />
      <CreditContext.Provider
        // useState를 이용하여 재렌더링을 구현하려고 하니 linter문제가 떴습니다.
        // useMemo를 사용하면 해결할 수 있다고 하여 적용하였습니다.
        value={useMemo(
          () => ({ creditAmount, setCreditAmount }),
          [creditAmount, setCreditAmount],
        )}
      >
        <MyCredit />
        {tabletSize ? <SponsorSlider /> : <SponsorPagination />}
        <Chart />
      </CreditContext.Provider>
    </div>
  );
}

export default ListPage;
