import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import closeIcon from '../assets/imgs/ic_close.svg';

function Modal({ title, type, open, onClose, children }) {
  // 모달 창이 열렸을 때 스크롤 비활성화
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const modalBackdropRef = useRef(null);

  if (!open) return null;

  // 모달 바깥 영역 클릭 시 모달 창 닫기
  const handleModalBackdropClick = (e) => {
    if (modalBackdropRef.current === e.target) {
      onClose();
    }
  };

  const modalStyle = type === 'wide' ? 'w-[524px]' : 'w-[344px]';

  return (
    <>
      {createPortal(
        <div
          className="fixed inset-0 flex h-full w-full items-center justify-center bg-blackPrimary/80"
          ref={modalBackdropRef}
          onClick={(e) => handleModalBackdropClick(e)}
          aria-hidden="true"
        >
          <div
            className={`${modalStyle} relative rounded-xl bg-blackSecondary p-5`}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-xl p-1 hover:bg-grayBlue/20 focus:bg-grayBlue/50"
              onClick={onClose}
            >
              <img className="h-6 w-6" src={closeIcon} alt="닫기 아이콘" />
            </button>
            {title && (
              <h2 className="mb-5 text-lg font-medium leading-6 text-whiteSecondary">
                {title}
              </h2>
            )}
            <div className="flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

export default Modal;
