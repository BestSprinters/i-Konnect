import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../assets/imgs/img_logo.png';
import myProfile from '../assets/imgs/loopy.png';

function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-center bg-blackPrimary">
      <div className="justify-centfeater container flex h-[80px] items-center">
        <Link to="/list">
          <img src={imgLogo} alt="로고" className="w-[200px] cursor-pointer" />
        </Link>
      </div>
      <div>
        <Link to="/my">
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
