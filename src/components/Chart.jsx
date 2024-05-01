import React from 'react';

import chartIcon from '../assets/imgs/ic_chart.svg';
import Button from './buttons/Button';
import ChoiceGender from './charts/ChoiceGender';

function Chart() {
  return (
    <div>
      <div className="flex">
        <h3 className="1 grow text-base font-bold text-whitePrimary md:text-xl xl:text-2xl">
          이달의 차트
        </h3>
        <Button>
          <div className="flex items-center justify-center gap-1">
            <img alt="chartIcon" src={chartIcon} />
            <p> 차트 투표하기</p>
          </div>
        </Button>
      </div>
      <div className="flex">
        <ChoiceGender />
      </div>
    </div>
  );
}

export default Chart;
