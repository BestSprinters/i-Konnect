import React from 'react';

import IdolAvatar from './IdolAvatar';

function ChartRank({ chart, rank, hideBorder }) {
  const { profilePicture, name, group, totalVotes } = chart;
  return (
    <div
      className={`h-17 flex w-full items-center py-2 ${hideBorder ? '' : 'border-b border-white/10'}`}
    >
      <div className="1 flex grow items-center gap-2">
        <IdolAvatar size="small" src={profilePicture} />
        <p className="w-4 text-sm font-medium">{rank}</p>
        <p className="text-sm font-medium">
          {group} {name}
        </p>
      </div>
      <p className="text-sm font-medium text-white/60">{totalVotes}표</p>
    </div>
  );
}

export default ChartRank;
