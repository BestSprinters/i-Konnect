import { Route, Routes } from 'react-router-dom';

import PAGES from './constants/paths';
import './index.css';
import AddSponsorPage from './pages/AddSponsorPage';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path={PAGES.home.link} element={<LandingPage />} />
      <Route path={PAGES.list.link} element={<ListPage />} />
      <Route path={PAGES.myPage.link} element={<Mypage />} />
      <Route path={PAGES.addSponsor.link} element={<AddSponsorPage />} />
      <Route path={PAGES.notFound.link} element={<NotFound />} />
    </Routes>
  );
}

export default App;
