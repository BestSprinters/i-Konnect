import React, { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import chartIcon from '../assets/imgs/ic_chart.svg';
import useMediaQuery from '../hooks/useMediaQuery';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import ChartList from './ChartList';
import ChoiceGender from './ChoiceGender';
import VoteModal from './VoteModal';

function Chart() {
  const matches = useMediaQuery('(min-width: 1280px)');
  const [chartList, setChartList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const { toggle, handleToggle } = useToggle();
  const [creditAmount, setCreditAmount] = useState(20000000);
  const [chartOption, setChartOption] = useState({
    gender: 'female',
    cursor: '',
    pageSize: matches ? 10 : 5,
  });

  localStorage.setItem('myCredit', creditAmount);

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(chartOption);
      setChartList(result.idols);
      setHasMore(result.nextCursor !== null);
    };
    loadChartList();
  }, [chartOption, toggle]);

  const handleClickMoreLook = () => {
    setChartOption((Options) => ({
      ...Options,
      pageSize: matches ? Options.pageSize + 10 : Options.pageSize + 5,
    }));
  };

  const handleClickChangeGender = (gender) => {
    setChartOption((Options) => ({
      ...Options,
      gender,
    }));
  };

  return (
    <div className="flex-col">
      <div className="flex">
        <h3 className="1 grow text-base font-bold text-whitePrimary md:text-xl xl:text-2xl">
          이달의 차트
        </h3>
        <Button type="smallSquare" onClick={handleToggle}>
          <div className="flex items-center justify-center gap-1">
            <img alt="chartIcon" src={chartIcon} />
            <p> 차트 투표하기</p>
          </div>
        </Button>
      </div>
      <div className="mt-4 flex md:mt-6">
        <ChoiceGender handleClickChangeGender={handleClickChangeGender} />
      </div>
      <ChartList chartList={chartList} matches={matches} />
      {hasMore && (
        <div className="mt-8 flex justify-center md:mt-7 xl:mt-12">
          <button
            type="button"
            className="border-#F1EEF9/80 w-80 rounded border bg-white/10 py-1 text-center text-sm font-bold leading-7"
            onClick={handleClickMoreLook}
          >
            더 보기
          </button>
        </div>
      )}
      <VoteModal
        gender={chartOption.gender}
        toggle={toggle}
        handleToggle={handleToggle}
        setCreditAmount={setCreditAmount}
        creditAmount={creditAmount}
        setChartList={setChartList}
        chartList={chartList}
      />
    </div>
  );
}

export default Chart;
