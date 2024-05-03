import { Link } from 'react-router-dom';

import PAGES from '../constants/paths';

function LandingPage() {
  return <Link to={PAGES.list.link}>LandingPage 입니다</Link>;
}

export default LandingPage;
