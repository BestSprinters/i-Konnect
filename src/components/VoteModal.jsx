import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotes';
import Button from './Button';
import Modal from './Modal';
import VoteRank from './VoteRank';

// voteModal에 gender="female" 이나 "male" 전달해줘야함
function VoteModal() {
  const [voteList, setVoteList] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [voteOption] = useState({
    // gender: `${gender}`,
    cursor: '',
    pageSize: 24,
  });

  const handleSelectedIdol = (id) => {
    if (selectedIdol === id) {
      setSelectedIdol('');
    } else {
      setSelectedIdol(id);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleVoteIdol = () => {
    postVotes(selectedIdol);
    setSelectedIdol('');
    handleCloseModal();
  };

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(voteOption);
      setVoteList(result.idols);
    };
    loadChartList();
  }, [voteOption]);

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      type="wide"
      title="이달의 아이돌"
    >
      <div className="mb-5 w-full overflow-y-auto" style={{ height: '514px' }}>
        {voteList.map((chart, index) => (
          <VoteRank
            src={chart.profilePicture}
            name={chart.name}
            group={chart.group}
            totalVotes={chart.totalVotes}
            id={chart.id}
            key={crypto.randomUUID}
            rank={index + 1}
            selectedIdol={selectedIdol}
            handleSelectedIdol={handleSelectedIdol}
          />
        ))}
      </div>
      <Button type="fullSquare" onClick={handleVoteIdol}>
        투표하기
      </Button>

      <p className="mt-3 flex text-xs leading-6">
        투표하는 데&nbsp;<span className="text-pointOrange">1000 크레딧</span>이
        소모됩니다.
      </p>
    </Modal>
  );
}

export default VoteModal;
