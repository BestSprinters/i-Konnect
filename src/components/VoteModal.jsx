import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotes';
import useMediaQuery from '../hooks/useMediaQuery';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import Modal from './Modal';
import VoteList from './VoteList';

const getVoteResponsibleStyle = (isFullModal) => {
  const voteMobileSize = isFullModal ? '100vh' : '522px';
  const voteMobileFixed = isFullModal
    ? 'fixed w-full bottom-0  h-28 py-4 px-5 bg-blackPrimary/80'
    : 'w-full';
  const voteMobileCreditTag = isFullModal ? 'pb-6' : '';

  return { voteMobileCreditTag, voteMobileFixed, voteMobileSize };
};

const initialVoteOption = {
  gender: 'female',
  cursor: '',
  pageSize: 24,
};

// useToggle에 true넣으시면 처음부터 모달창이 뜨게됩니다.
function VoteModal({ gender = 'female' }) {
  const { toggle, handleToggle } = useToggle(true);
  const [voteList, setVoteList] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState();
  const isFullModal = useMediaQuery('(max-width: 767px)');
  const voteTitle =
    gender === 'female' ? '이달의 여자 아이돌' : '이달의 남자 아이돌';

  const handleSelectedIdol = (id) => {
    if (selectedIdol === id) {
      setSelectedIdol('');
      return;
    }
    setSelectedIdol(id);
  };

  const handleVoteIdol = () => {
    postVotes(selectedIdol);
    setSelectedIdol('');
    handleToggle();
  };

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(initialVoteOption);
      setVoteList(result.idols);
    };
    loadChartList();
  }, []);

  const { voteMobileCreditTag, voteMobileFixed, voteMobileSize } =
    getVoteResponsibleStyle(isFullModal);

  return (
    <Modal
      open={toggle}
      onClose={handleToggle}
      type="wide"
      title={voteTitle}
      isFullModal={isFullModal}
    >
      <div
        className="mb-5 w-full overflow-y-auto"
        style={{ height: `${voteMobileSize}` }}
      >
        <VoteList
          voteList={voteList}
          selectedIdol={selectedIdol}
          handleSelectedIdol={handleSelectedIdol}
        />
      </div>
      <div
        className={`${voteMobileFixed} flex-col items-center justify-center`}
      >
        <Button type="fullSquare" onClick={handleVoteIdol}>
          투표하기
        </Button>
        <p className={`${voteMobileCreditTag} mt-4 text-center text-xs`}>
          투표하는 데 <span className="text-pointOrange">1000 크레딧</span>이
          소모됩니다.
        </p>
      </div>
    </Modal>
  );
}

export default VoteModal;
