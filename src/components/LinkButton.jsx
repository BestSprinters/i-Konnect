import React from 'react';
import { Link } from 'react-router-dom';

import createButtonStyle from '../utils/createButtonStyle';

function LinkButton(props) {
  const { isDisabled = false, children, onClick, type, to } = props;

  const buttonTypeStyle = createButtonStyle(isDisabled);
  const buttonTypeName = type ? buttonTypeStyle[type] : '';

  return (
    <Link
      to={to}
      onClick={onClick}
      disabled={isDisabled}
      className={`cursor-point flex items-center justify-center px-[16px] text-[13px] font-bold ${buttonTypeName}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
