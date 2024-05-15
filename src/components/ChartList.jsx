import ChartRank from './ChartRank';

function ChartList({ chartList, matches }) {
  const { length } = chartList;
  const requiredLength = matches ? 10 : 5;
  const skeletonCount = requiredLength - length;
  const skeletonArray = Array.from({ length: skeletonCount });

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
      {skeletonArray.map((_, key) => (
        <div key={key && key} className="h-[87px] w-full" />
      ))}
    </div>
  );
}

export default ChartList;
