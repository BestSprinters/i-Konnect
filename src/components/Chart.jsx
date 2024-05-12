import { useContext } from 'react';

import chartIcon from '../assets/imgs/ic_chart.svg';
import CreditContext from '../contexts/CreditAmount';
import useChartLoader from '../hooks/useChartLoader';
import useMediaQuery from '../hooks/useMediaQuery';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import ChartList from './ChartList';
import ChartMoreButton from './ChartMoreButton';
import ChoiceGender from './ChoiceGender';
import NoCreditModal from './NoCreditModal';
import VoteModal from './VoteModal';

function Chart() {
  const { creditAmount, setCreditAmount } = useContext(CreditContext);
  const matches = useMediaQuery('(min-width: 1280px)');
  const [voteToggle, handleVoteToggle] = useToggle();
  const [noCreditToggle, handleNoCreditToggle] = useToggle();
  const {
    chartList,
    hasMore,
    updateChartOption,
    setChartList,
    chartOption,
    searchValue,
    updateSearchIdol,
  } = useChartLoader({
    gender: 'female',
    cursor: '',
    pageSize: matches ? 10 : 5,
  });

  return (
    <div className="mb-[60px] mt-[40px] flex-col px-6 tablet:mb-80 tablet:mt-[60px] desktop:mt-20">
      <div className="flex">
        <h3 className="1 grow text-base font-bold text-whitePrimary tablet:text-xl desktop:text-2xl">
          이달의 차트
        </h3>
        <input
          type="input"
          value={searchValue}
          onChange={updateSearchIdol}
          placeholder="이름 or 그룹"
          className="border-whiteSecondary-500 font-regular w-30 h-[32px] rounded-[3px] border bg-blackSecondary px-2 py-2 focus:outline-none"
        />
        <Button type="smallSquare" onClick={handleVoteToggle}>
          <div className="flex items-center justify-center gap-1">
            <img alt="chartIcon" src={chartIcon} />
            <p> 차트 투표하기</p>
          </div>
        </Button>
      </div>
      <div className="mt-4 flex tablet:mt-6">
        <ChoiceGender
          handleClickChangeGender={(gender) => updateChartOption({ gender })}
        />
      </div>
      <ChartList chartList={chartList} matches={matches} />
      {hasMore && (
        <div className="mt-8 flex justify-center tablet:mt-7 desktop:mt-12">
          <ChartMoreButton
            onClick={() =>
              updateChartOption({
                pageSize: matches
                  ? chartOption.pageSize + 10
                  : chartOption.pageSize + 5,
              })
            }
          />
        </div>
      )}
      <VoteModal
        gender={chartOption.gender}
        toggle={voteToggle}
        handleVoteToggle={handleVoteToggle}
        handleNoCreditToggle={handleNoCreditToggle}
        setChartList={setChartList}
        chartList={chartList}
        creditAmount={creditAmount}
        setCreditAmount={setCreditAmount}
      />
      <NoCreditModal open={noCreditToggle} onClose={handleNoCreditToggle} />
    </div>
  );
}

export default Chart;
