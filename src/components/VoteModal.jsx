import { useContext, useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotesApi';
import CreditContext from '../contexts/CreditAmount';
import Button from './Button';
import Modal from './Modal';
import VoteList from './VoteList';

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
  const [selectedIdol, setSelectedIdol] = useState();
  const [voteOption, setVoteOption] = useState({
    gender: 'female',
    cursor: '',
    pageSize: 10000,
  });

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
    } else {
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
        return newCreditAmount;
      });
    }

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

  return (
    <Modal
      open={toggle}
      onClose={handleVoteToggle}
      type="wide"
      title={voteTitle}
    >
      <div className="mb-5 h-[522px] w-full overflow-y-auto mobile:mb-0 mobile:h-full">
        <div className="mb-28">
          <VoteList
            voteList={voteList}
            selectedIdol={selectedIdol}
            handleSelectedIdol={handleSelectedIdol}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center mobile:fixed mobile:bottom-0 mobile:bg-blackPrimary/80 mobile:p-5">
        <Button type="fullSquarePrimary" onClick={handleVoteIdol}>
          투표하기
        </Button>
        <p className="mt-4 text-center text-xs">
          투표하는 데 <span className="text-pointOrange">1000 크레딧</span>이
          소모됩니다.
        </p>
      </div>
    </Modal>
  );
}

export default VoteModal;
