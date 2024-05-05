import { useState } from 'react';

import checkedIcon from '../assets/imgs/ic_check_small.svg';
import radioChecked from '../assets/imgs/ic_radio_checked.svg';
import radioUnChecked from '../assets/imgs/ic_radio_unchecked.svg';
import IdolAvatar from './IdolAvatar';

function VoteRank({
  src,
  name,
  group,
  totalVotes,
  rank,
  id,
  handleSelectedIdol,
}) {
  const [checked, setChecked] = useState(false);

  const formattedTotalVotes = new Intl.NumberFormat().format(totalVotes);

  const toggleCheck = () => {
    setChecked(!checked);
    handleSelectedIdol(id);
    console.log(checked);
  };
  // 하.. handle있으면 두번클릭해야 체크가 되는데 어카냐..
  return (
    <div className="h-17 flex w-full items-center gap-2 border-b border-white/10 py-2">
      <div className="relative flex items-center gap-3">
        <IdolAvatar size="small" src={src} alt={name} />
        <p className="w-4 text-sm font-medium text-pointOrange">{rank}</p>
        {checked && (
          <img alt="checked" src={checkedIcon} className="absolute left-6" />
        )}
      </div>
      <div className="1 grow flex-col">
        <p className="text-sm font-medium">
          {group} {name}
        </p>
        <p className="text-sm font-medium text-white/60">
          {formattedTotalVotes}표
        </p>
      </div>
      <button type="button" onClick={() => toggleCheck()} key={id}>
        <img
          src={checked ? radioChecked : radioUnChecked}
          alt={checked ? 'checked' : 'unchecked'}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
}

export default VoteRank;
// <input
// type="radio"
// name="idol"
// className="h-[14px] w-[14px] cursor-pointer rounded-full border-[3px] bg-grayBlue shadow-[0_0_0_1px_theme(colors.grayBlue)] checked:bg-pointOrange checked:shadow-[0_0_0_1px_theme(colors.pointOrange)]"
// />
