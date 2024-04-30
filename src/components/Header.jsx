import React from 'react';

import imgLogo from '../assets/imgs/img_logo.png';
import myProfile from '../assets/imgs/loopy.png';

function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-center bg-blackPrimary">
      <div className="container flex h-[80px] items-center justify-center">
        <img src={imgLogo} alt="로고" className="w-[200px] cursor-pointer" />
      </div>
      <div>
        <img
          src={myProfile}
          alt="프로필"
          className="float-right mr-4 h-[32px] w-[32px] cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
