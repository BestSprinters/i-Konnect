import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import postVotes from '../apis/votes/postVotes';
import modalCloseIcon from '../assets/imgs/ic_arrow_left.svg';
import useMediaQuery from '../hooks/useMediaQuery';
import Button from './Button';
import Modal from './Modal';
import VoteRank from './VoteRank';

// voteModal에 gender="female" 이나 "male" 전달해줘야함
function VoteModal() {
  const [voteList, setVoteList] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isFullModal = useMediaQuery('(max-width: 767px)');
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

  const voteMobileSize = isFullModal ? '100vh' : '522px';
  const voteMobileFixed = isFullModal
    ? 'fixed w-full bottom-0  h-28 py-4 px-5 bg-blackPrimary/80'
    : 'w-full';
  const voteMobileCreditTag = isFullModal ? 'bg-blackPrimary pb-6' : '';

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      type="wide"
      title="이달의 여자 아이돌"
      isFullModal={isFullModal}
    >
      <div
        className="mb-5 w-full overflow-y-auto"
        style={{ height: `${voteMobileSize}` }}
      >
        {isFullModal && (
          <div>
            <button
              type="button"
              className="absolute left-4 top-4 rounded-xl p-1 hover:bg-grayBlue/20 focus:bg-grayBlue/50"
              onClick={handleCloseModal}
            >
              <img className="h-6 w-6" src={modalCloseIcon} alt="닫기 아이콘" />
            </button>
            <h2 className=" mb-5 text-center text-lg font-medium leading-6 text-whiteSecondary">
              이달의 여자 아이돌
            </h2>
          </div>
        )}
        {voteList.map((chart, index) => (
          <VoteRank
            src={chart.profilePicture}
            name={chart.name}
            group={chart.group}
            totalVotes={chart.totalVotes}
            id={chart.id}
            key={crypto.randomUUID()}
            rank={index + 1}
            selectedIdol={selectedIdol}
            handleSelectedIdol={handleSelectedIdol}
          />
        ))}
      </div>
      <div
        className={`${voteMobileFixed} flex-col items-center justify-center`}
      >
        <Button type="fullSquare" onClick={handleVoteIdol}>
          투표하기
        </Button>
        <p className={`${voteMobileCreditTag} mt-4 text-center text-xs`}>
          투표하는 데&nbsp;<span className="text-pointOrange">1000 크레딧</span>
          이 소모됩니다.
        </p>
      </div>
    </Modal>
  );
}

export default VoteModal;
