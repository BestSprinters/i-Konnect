import VoteRank from './VoteRank';

function VoteList({ voteList, selectedIdol, handleSelectedIdol }) {
  return (
    <div>
      {voteList?.map((voteIdol, index) => (
        <VoteRank
          key={voteIdol.id}
          rank={index + 1}
          selectedIdol={selectedIdol}
          handleSelectedIdol={handleSelectedIdol}
          voteIdol={voteIdol}
        />
      ))}
    </div>
  );
}

export default VoteList;
