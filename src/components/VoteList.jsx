import VoteRank from './VoteRank';

function VoteList({ voteList, selectedIdol, handleSelectedIdol }) {
  return (
    <div>
      {voteList.map((chart, index) => (
        <VoteRank
          key={crypto.randomUUID()}
          rank={index + 1}
          selectedIdol={selectedIdol}
          handleSelectedIdol={handleSelectedIdol}
          chart={chart}
        />
      ))}
    </div>
  );
}

export default VoteList;
