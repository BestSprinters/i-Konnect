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
          profilePicture={voteIdol.profilePicture}
          name={voteIdol.name}
          group={voteIdol.group}
          totalVotes={voteIdol.totalVotes}
          id={voteIdol.id}
        />
      ))}
    </div>
  );
}

export default VoteList;
