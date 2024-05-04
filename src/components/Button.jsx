import React from 'react';

import createButtonStyle from '../utils/createButtonStyle';

function Button(props) {
  const { isDisabled = false, children, onClick, type } = props;

  const buttonTypeStyle = createButtonStyle(isDisabled);
  const buttonTypeName = type ? buttonTypeStyle[type] : '';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`cursor-point flex items-center justify-center px-[16px] text-[13px] font-bold ${buttonTypeName}`}
    >
      {children}
    </button>
  );
}

export default Button;
