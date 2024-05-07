import creditImage from '../assets/imgs/img_credit.svg';
import Button from './Button';
import Modal from './Modal';

function NoCreditModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <img src={creditImage} alt="크레딧" />
      <p className="mb-8 font-medium">
        앗! 투표하기 위한 <span className="text-pointOrange">크레딧</span>이
        부족해요
      </p>
      <Button type="largeSquare" onClick={onClose}>
        확인
      </Button>
    </Modal>
  );
}

export default NoCreditModal;
