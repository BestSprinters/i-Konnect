import { useEffect, useState } from 'react';

import getCharts from './apis/charts/getChartApi';
import getDonations from './apis/donations/getDonationsApi';
import getIdols from './apis/idols/getIdolsApi';
import './index.css';

function App() {
  const [idolsData, setIdolsData] = useState([]);

  const loadIdolsData = async () => {
    const result = await getIdols();
    return setIdolsData(result);
  };

  useEffect(() => {
    loadIdolsData();
    getDonations();
    getCharts();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1>Hello World!</h1>
      {idolsData?.map((idol) => (
        <img
          className="flex h-14 w-14"
          alt="idols"
          src={idol.profilePicture}
          key={idol.id}
        />
      ))}
    </div>
  );
}

export default App;
