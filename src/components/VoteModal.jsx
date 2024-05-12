import { useContext, useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotesApi';
import CreditContext from '../contexts/CreditAmount';
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

function VoteModal({
  gender = 'female',
  toggle,
  handleVoteToggle,
  handleNoCreditToggle,
  setChartList,
  chartList,
}) {
  const { creditAmount, setCreditAmount } = useContext(CreditContext);
  const [voteList, setVoteList] = useState([]);
  const { setCreditAmount: setmyCredit } = useContext(CreditContext);
  const [selectedIdol, setSelectedIdol] = useState();
  const [voteOption, setVoteOption] = useState({
    gender: 'female',
    cursor: '',
    pageSize: 10000,
  });

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

  const handleVoteIdol = async () => {
    handleVoteToggle();
    if (creditAmount < 1000) {
      handleNoCreditToggle();
      throw new Error('Credit amount is less than required 1000 credits.');
    }

    const receivedVotes = await postVotes(selectedIdol);
    const updatedVoteList = chartList.map((idol) =>
      idol.id === receivedVotes.idol.id
        ? { ...idol, ...receivedVotes.idol }
        : idol,
    );
    setChartList(updatedVoteList);
    setCreditAmount((credit) => {
      const newCreditAmount = credit - 1000;
      localStorage.setItem('myCredit', newCreditAmount);
      setmyCredit(newCreditAmount);
      return newCreditAmount;
    });
    setSelectedIdol('');
  };

  useEffect(() => {
    setVoteOption((prev) => ({ ...prev, gender }));
  }, [gender]);

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(voteOption);
      setVoteList(result.idols);
    };
    loadChartList();
  }, [toggle, voteOption]);

  const { voteMobileCreditTag, voteMobileFixed, voteMobileSize } =
    getVoteResponsibleStyle(isFullModal);

  return (
    <Modal
      open={toggle}
      onClose={handleVoteToggle}
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
        {isFullModal && <div className="h-44 w-full" />}
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
