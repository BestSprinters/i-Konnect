import { useRef } from 'react';

import closeIcon from '../assets/imgs/ic_close.svg';

function Modal({ title, type, open, onClose, children }) {
  const modalBackdropRef = useRef(null);

  if (!open) return null;

  const handleModalBackdropClick = (e) => {
    if (modalBackdropRef.current === e.target) {
      onClose();
    }
  };

  const modalStyle = type === 'wide' ? 'w-[524px]' : 'w-[344px]';

  return (
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
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
