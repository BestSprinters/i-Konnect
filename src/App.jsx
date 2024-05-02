import { useEffect, useState } from 'react';

import getCharts from './apis/charts/getChartApi';
import getIdols from './apis/idols/getIdolsApi';
import './index.css';

function App() {
  const [idolsData, setIdolsData] = useState([]);
  const [chartsData, setChartsData] = useState([]);
  const [idolOption] = useState({
    cursor: '21',
    pageSize: 7,
    keyword: '에스파',
  });
  const [chartOption] = useState({
    gender: 'male',
    cursor: '94',
    pageSize: 10,
  });

  useEffect(() => {
    const loadIdolsData = async () => {
      const result = await getIdols(idolOption);
      setIdolsData(result);
    };
    loadIdolsData();
  }, [idolOption]);

  useEffect(() => {
    const loadChartsData = async () => {
      const result = await getCharts(chartOption);
      setChartsData(result);
    };
    loadChartsData();
  }, [chartOption]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>getIdols</h1>
        {idolsData.list?.map((idol) => (
          <img
            className="flex h-14 w-14"
            alt="idols"
            src={idol.profilePicture}
            key={idol.id}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <h1>getCharts</h1>
        {chartsData.idols?.map((idol) => (
          <img
            className="flex h-14 w-14"
            alt="idols"
            src={idol.profilePicture}
            key={idol.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
