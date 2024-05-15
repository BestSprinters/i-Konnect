import imgVoteSuccess from '../assets/imgs/img_vote_success.png';
import Button from './Button';
import Modal from './Modal';

function VoteSuccessModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <img src={imgVoteSuccess} className="my-6 h-44 w-44" alt="투표 성공" />
      <p className="mb-8 font-medium">
        투표가 <span className="text-pointOrange">성공</span>
        했어요!
      </p>
      <Button type="fullSquarePrimary" onClick={onClose}>
        확인
      </Button>
    </Modal>
  );
}

export default VoteSuccessModal;
