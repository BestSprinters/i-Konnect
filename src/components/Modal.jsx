import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import icArrowLeft from '../assets/imgs/ic_arrow_left.svg';
import icClose from '../assets/imgs/ic_close.svg';
import useMediaQuery from '../hooks/useMediaQuery';

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

  const isMobile = useMediaQuery('(max-width: 767px)');

  if (!open) return null;

  // 모달 바깥 영역 클릭 시 모달 창 닫기
  const handleModalBackdropClick = (e) => {
    if (modalBackdropRef.current === e.target) {
      onClose();
    }
  };

  if (isMobile && type === 'wide') {
    return (
      <>
        {createPortal(
          <div className="fixed inset-0 z-50 flex h-full w-full flex-col bg-blackPrimary p-5 pb-0">
            <div className="relative mb-5 flex h-8 shrink-0 items-center justify-center">
              <button
                type="button"
                className="absolute left-0 top-0 rounded-xl p-1 hover:bg-grayBlue/20 focus:bg-grayBlue/50"
                onClick={onClose}
              >
                <img className="h-6 w-6" src={icArrowLeft} alt="닫기 아이콘" />
              </button>
              {title && (
                <h2 className="font-medium text-whiteSecondary">{title}</h2>
              )}
            </div>
            <div className="flex flex-col items-center justify-center overflow-y-auto">
              {children}
            </div>
          </div>,
          document.getElementById('modal-root'),
        )}
      </>
    );
  }

  return (
    <>
      {createPortal(
        <motion.div
          initial={{ backgroundColor: 'rgba(2, 0, 4, 0)' }}
          animate={{ backgroundColor: 'rgba(2, 0, 4, 0.8)' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center"
          ref={modalBackdropRef}
          onClick={(e) => handleModalBackdropClick(e)}
          aria-hidden="true"
        >
          <motion.div
            initial={{ y: '10%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { duration: 0.2, ease: 'easeInOut' },
              opacity: { duration: 0.4 },
            }}
            className={`${type === 'wide' ? 'w-[524px]' : 'w-[344px]'} relative rounded-xl bg-blackSecondary p-5`}
          >
            <div>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-xl p-1 hover:bg-grayBlue/20 focus:bg-grayBlue/50"
                onClick={onClose}
              >
                <img className="h-6 w-6" src={icClose} alt="닫기 아이콘" />
              </button>
              {title && (
                <h2 className="mb-5 text-lg font-medium leading-6 text-whiteSecondary">
                  {title}
                </h2>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              {children}
            </div>
          </motion.div>
        </motion.div>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

export default Modal;
