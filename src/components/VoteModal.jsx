import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotesApi';
import useMediaQuery from '../hooks/useMediaQuery';
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

function VoteModal({
  gender = 'female',
  toggle,
  handleToggle,
  setCreditAmount,
  creditAmount,
  setChartList,
  chartList,
}) {
  const [voteList, setVoteList] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState();
  const isFullModal = useMediaQuery('(max-width: 767px)');
  const voteTitle =
    gender === 'female' ? '이달의 여자 아이돌' : '이달의 남자 아이돌';
  const [voteOption, setVoteOption] = useState(initialVoteOption);

  useEffect(() => {
    setVoteOption((prev) => ({ ...prev, gender }));
  }, [gender]);

  const handleSelectedIdol = (id) => {
    if (selectedIdol === id) {
      setSelectedIdol('');
      return;
    }
    setSelectedIdol(id);
  };

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(voteOption);
      setVoteList(result.idols);
    };
    loadChartList();
  }, [voteOption, toggle]);

  const handleVoteIdol = async () => {
    handleToggle();
    if (creditAmount < 1000) {
      setSelectedIdol('');
    } else {
      const receivedVotes = await postVotes(selectedIdol);
      const updatedVoteList = chartList.map((idol) =>
        idol.id === receivedVotes.idol.id
          ? { ...idol, ...receivedVotes.idol }
          : idol,
      );
      setChartList(updatedVoteList);
      setCreditAmount(creditAmount - 1000);
      setSelectedIdol('');
    }
  };

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
        className="h- mb-5 w-full overflow-y-auto"
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
