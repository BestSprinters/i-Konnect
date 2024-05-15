import { useEffect, useState } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
import chartIcon from '../assets/imgs/ic_chart.svg';
import icSearch from '../assets/imgs/ic_search.svg';
import useChartLoader from '../hooks/useChartLoader';
import useMediaQuery from '../hooks/useMediaQuery';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import ChartList from './ChartList';
import ChoiceGender from './ChoiceGender';
import NoCreditModal from './NoCreditModal';
import VoteModal from './VoteModal';
import VoteSuccessModal from './VoteSuccessModal';

function Chart() {
  const matches = useMediaQuery('(min-width: 1280px)');
  const [voteToggle, handleVoteToggle] = useToggle();
  const [noCreditToggle, handleNoCreditToggle] = useToggle();
  const [voteSuccessToggle, handleVoteSuccessToggle] = useToggle();
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

  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      updateSearchIdol(debouncedSearchValue);
    }, 300); // 300ms의 딜레이

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchValue]);

  return (
    <div className="mb-[60px] mt-[40px] flex-col px-6 tablet:mb-80 tablet:mt-[60px] desktop:mt-20 desktop:px-0">
      <div className="relative flex gap-4 mobile:h-20">
        <h3 className="grow text-lg font-bold text-whitePrimary tablet:text-xl desktop:text-2xl">
          이달의 차트
        </h3>
        <div className="relative mobile:absolute mobile:bottom-0 mobile:w-full">
          <img
            src={icSearch}
            alt="search icon"
            className="absolute left-2 top-1 h-[24px] w-[24px]"
          />
          <input
            type="input"
            value={debouncedSearchValue}
            onChange={(e) => setDebouncedSearchValue(e.target.value)}
            placeholder="이름 또는 그룹명을 입력해주세요."
            className="border-whiteSecondary-500 font-regular h-[32px] w-[300px] rounded-[3px] border bg-blackSecondary px-9 py-2 focus:outline-none mobile:w-full"
          />
        </div>
        <Button type="fitSquarePrimary" onClick={handleVoteToggle}>
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
      {hasMore ? (
        <div className="mt-8 flex justify-center tablet:mt-7 desktop:mt-12">
          <Button
            type="largeSquareBlack"
            onClick={() =>
              updateChartOption({
                pageSize: matches
                  ? chartOption.pageSize + 10
                  : chartOption.pageSize + 5,
              })
            }
          >
            더 보기
          </Button>
        </div>
      ) : (
        <div className="mt-8 h-[42px] w-[326px] tablet:mt-7 desktop:mt-12" />
      )}
      <VoteModal
        gender={chartOption.gender}
        toggle={voteToggle}
        handleVoteToggle={handleVoteToggle}
        handleNoCreditToggle={handleNoCreditToggle}
        handleVoteSuccessToggle={handleVoteSuccessToggle}
        setChartList={setChartList}
        chartList={chartList}
      />
      <NoCreditModal open={noCreditToggle} onClose={handleNoCreditToggle} />
      <VoteSuccessModal
        open={voteSuccessToggle}
        onClose={handleVoteSuccessToggle}
      />
    </div>
  );
}

export default Chart;
