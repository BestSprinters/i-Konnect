import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../assets/imgs/img_logo.png';
import myProfile from '../assets/imgs/loopy.png';
import PAGES from '../constants/paths';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const baseHeaderStyle =
    'fixed left-0 top-0 flex w-full items-center justify-center';

  const headerScrollStyle = {
    base: 'bg-transparent',
    scroll: 'bg-blackPrimary',
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerScrollValid =
    scrollPosition === 0 ? headerScrollStyle.base : headerScrollStyle.scroll;

  return (
    <div
      className={`transition-all duration-300 ${baseHeaderStyle} ${headerScrollValid}`}
    >
      <div className="container flex h-[80px] items-center justify-center">
        <Link to={PAGES.list.link}>
          <img src={imgLogo} alt="로고" className="w-[200px] cursor-pointer" />
        </Link>
      </div>
      <div>
        <Link to={PAGES.myPage.link}>
          <img
            src={myProfile}
            alt="프로필"
            className="float-right mr-4 h-[32px] w-[32px] cursor-pointer rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
