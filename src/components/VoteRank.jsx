import radioChecked from '../assets/imgs/ic_radio_checked.svg';
import radioUnChecked from '../assets/imgs/ic_radio_unchecked.svg';
import CheckedIdolAvatar from './CheckedIdolAvatar';
import IdolAvatar from './IdolAvatar';

function VoteRank({
  src,
  name,
  group,
  totalVotes,
  rank,
  id,
  selectedIdol,
  handleSelectedIdol,
}) {
  const formattedTotalVotes = new Intl.NumberFormat().format(totalVotes);

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
          <CheckedIdolAvatar size="small" src={src} alt={name} />
        ) : (
          <IdolAvatar size="small" src={src} alt={name} />
        )}
        <p className="w-4 text-sm font-medium text-pointOrange">{rank}</p>
      </div>
      <div className="grow flex-col pl-8 text-start">
        <p className=" text-sm font-medium">
          {group} {name}
        </p>
        <p className="text-sm font-medium text-white/60">
          {formattedTotalVotes}표
        </p>
      </div>
      <button type="button">
        <img
          src={selectedIdol === id ? radioChecked : radioUnChecked}
          alt={selectedIdol === id ? 'checked' : 'unchecked'}
        />
      </button>
    </button>
  );
}

export default VoteRank;
// <input
// type="radio"
// name="idol"
// className="h-[14px] w-[14px] cursor-pointer rounded-full border-[3px] bg-grayBlue shadow-[0_0_0_1px_theme(colors.grayBlue)] checked:bg-pointOrange checked:shadow-[0_0_0_1px_theme(colors.pointOrange)]"
// />
