import React from 'react';

import IdolAvatar from './IdolAvatar';

function ChartRank({
  rank,
  hideBorder,
  profilePicture,
  name,
  group,
  totalVotes,
}) {
  return (
    <div
      className={`h-17 flex w-full items-center py-2 ${hideBorder ? '' : 'border-b border-white/10'}`}
    >
      <div className="1 flex grow items-center gap-2">
        <IdolAvatar size="small" src={profilePicture} />
        <p className="ml-2 w-4 text-sm font-medium text-pointOrange/60">
          {rank}
        </p>
        <p className="text-sm font-medium">
          {group} {name}
        </p>
      </div>
      <p className="text-sm font-medium text-white/60">{totalVotes}표</p>
    </div>
  );
}

export default ChartRank;
