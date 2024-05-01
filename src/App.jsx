import { useEffect, useState } from 'react';

import getIdols from './apis/idols/getIdolsApi';
import './index.css';

function App() {
  const [idolsData, setIdolsData] = useState([]);

  useEffect(() => {
    const loadIdolsData = async () => {
      const result = await getIdols();
      return setIdolsData(result);
    };
    loadIdolsData();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1>Hello World!</h1>
      {idolsData.list?.map((idol) => (
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
