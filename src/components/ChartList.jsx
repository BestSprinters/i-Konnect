import React from 'react';

import ChartRank from './ChartRank';

function ChartList({ chartList, matches }) {
  const { length } = chartList;

  return (
    <div
      className={`mt-4 grid gap-x-6 tablet:mt-6 ${matches ? 'grid-cols-2' : 'grid-cols-1'}`}
    >
      {chartList?.map((chart, index) => {
        const isLastItem = index === length - 1;
        const isSecondLastItem = index === length - 2;

        let hideBorder = false;
        if (matches) {
          hideBorder = isLastItem || isSecondLastItem;
        } else {
          hideBorder = isLastItem;
        }

        return (
          <ChartRank
            key={chart.id}
            rank={index + 1}
            hideBorder={hideBorder}
            profilePicture={chart.profilePicture}
            name={chart.name}
            group={chart.group}
            totalVotes={chart.totalVotes}
          />
        );
      })}
    </div>
  );
}

export default ChartList;
