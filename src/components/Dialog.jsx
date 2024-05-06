import React from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

function Dialog() {
  return (
    <>
      {createPortal(
        <div className="m-auto flex w-52 flex-col items-center justify-center gap-8 bg-blackSecondary p-4">
          <h2 className="text-center">다이얼로그</h2>
          <p>정말 삭제 하시겠습니까?</p>
          <div className="flex items-center justify-center gap-8">
            <Button type="smallSquare">귀찮군</Button>
            <Button type="smallSquare">귀찮군</Button>
          </div>
        </div>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

export default Dialog;
