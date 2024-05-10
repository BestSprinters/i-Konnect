import { useState } from 'react';

import chartIcon from '../assets/imgs/ic_chart.svg';
import useChartLoader from '../hooks/useChartLoader';
import useMediaQuery from '../hooks/useMediaQuery';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import ChartList from './ChartList';
import ChartMoreButton from './ChartMoreButton';
import ChoiceGender from './ChoiceGender';
import VoteModal from './VoteModal';

function Chart() {
  const matches = useMediaQuery('(min-width: 1280px)');
  const { toggle, handleToggle } = useToggle();
  const [creditAmount, setCreditAmount] = useState(
    localStorage.getItem('myCredit'),
  );
  const { chartList, hasMore, updateChartOption, setChartList, chartOption } =
    useChartLoader({
      gender: 'female',
      cursor: '',
      pageSize: matches ? 10 : 5,
    });

  return (
    <div className="mb-[60px] mt-[40px] flex-col px-6 md:mb-80 md:mt-[60px] xl:mt-20">
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
        <ChoiceGender
          handleClickChangeGender={(gender) => updateChartOption({ gender })}
        />
      </div>
      <ChartList chartList={chartList} matches={matches} />
      {hasMore && (
        <div className="mt-8 flex justify-center md:mt-7 xl:mt-12">
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
        toggle={toggle}
        handleToggle={handleToggle}
        setChartList={setChartList}
        chartList={chartList}
        creditAmount={creditAmount}
        setCreditAmount={setCreditAmount}
      />
    </div>
  );
}

export default Chart;
