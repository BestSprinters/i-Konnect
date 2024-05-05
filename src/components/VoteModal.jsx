import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotes';
import Button from './Button';
import Modal from './Modal';
import VoteRank from './VoteRank';

// 처음 뜨면 6명 보이고, 모바일이면 7명 보여야됨 css도 좀 다름
// pc, tab일땐, 마우스 스크롤 모바일 일땐, 터치 스크롤
function VoteModal() {
  const [voteList, setVoteList] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [voteOption] = useState({
    gender: 'female',
    cursor: '',
    pageSize: 24,
  });

  const handleSelectedIdol = (id) => {
    setSelectedIdol(id);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleVoteIdol = () => {
    postVotes(selectedIdol);
    setSelectedIdol('');
    // handleCloseModal();
  };

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(voteOption);
      setVoteList(result.idols);
    };
    loadChartList();
  }, [voteOption]);

  // 투표하기 누르면
  return (
    <Modal
      title="이달의 여자 아이돌"
      open={isModalOpen}
      onClose={handleCloseModal}
      type="wide"
    >
      <div className="mb-5 w-full overflow-y-auto" style={{ height: '514px' }}>
        {voteList.map((chart, index) => (
          <VoteRank
            src={chart.profilePicture}
            name={chart.name}
            group={chart.group}
            totalVotes={chart.totalVotes}
            key={crypto.randomUUID()}
            rank={index + 1}
            id={chart.id}
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
