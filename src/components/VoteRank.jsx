import icRadioChecked from '../assets/imgs/ic_radio_checked.svg';
import icRadioUnchecked from '../assets/imgs/ic_radio_unchecked.svg';
import formattedNumber from '../utils/formattedNumber';
import CheckedIdolAvatar from './CheckedIdolAvatar';
import IdolAvatar from './IdolAvatar';

function VoteRank({ selectedIdol, handleSelectedIdol, rank, chart }) {
  const { profilePicture, name, group, totalVotes, id } = chart;
  const formattedTotalVotes = formattedNumber(totalVotes);

  const toggleCheck = () => {
    handleSelectedIdol(id);
  };

  return (
    <button
      type="button"
      onClick={toggleCheck}
      className="h-17 flex w-full  items-center  gap-2 border-b border-white/10 py-2"
    >
      <div className="relative flex items-center gap-3">
        {selectedIdol === id ? (
          <CheckedIdolAvatar size="small" src={profilePicture} alt={name} />
        ) : (
          <IdolAvatar size="small" src={profilePicture} alt={name} />
        )}
        <p className="w-4 text-sm font-medium text-pointOrange">{rank}</p>
      </div>
      <div className="grow flex-col pl-1 text-start">
        <p className=" text-sm font-medium">
          {group} {name}
        </p>
        <p className="text-sm font-medium text-white/60">
          {formattedTotalVotes}표
        </p>
      </div>
      <img
        src={selectedIdol === id ? icRadioChecked : icRadioUnchecked}
        alt={selectedIdol === id ? 'checked' : 'unchecked'}
      />
    </button>
  );
}

export default VoteRank;
