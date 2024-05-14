import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PAGES from './constants/paths';
import CreditContext from './contexts/CreditAmount';
import './index.css';
import AddSponsorPage from './pages/AddSponsorPage';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  const [creditAmount, setCreditAmount] = useState();
  useEffect(() => {
    setCreditAmount(localStorage.getItem('myCredit'));
  }, []);
  return (
    <CreditContext.Provider
      // useState를 이용하여 재렌더링을 구현하려고 하니 linter문제가 떴습니다.
      // useMemo를 사용하면 해결할 수 있다고 하여 적용하였습니다.
      value={useMemo(
        () => ({ creditAmount, setCreditAmount }),
        [creditAmount, setCreditAmount],
      )}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={PAGES.home.link} element={<LandingPage />} />
          <Route path={PAGES.list.link} element={<ListPage />} />
          <Route path={PAGES.myPage.link} element={<MyPage />} />
          <Route path={PAGES.addSponsor.link} element={<AddSponsorPage />} />
          <Route path={PAGES.notFound.link} element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </CreditContext.Provider>
  );
}

export default App;
