import { useEffect, useState } from 'react';

import getIdols from '../apis/idols/getIdolsApi';
import IdolThumbnail from './IdolThumbnail';
import Button from './buttons/Button';

function MyPageIdol() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);

  const getIdolList = async () => {
    const { list } = await getIdols({ pageSize: 16 });
    // favoriteIdols에 있는 id는 list에서 제외하고 돌려하대
    const faovorite = JSON.parse(localStorage.getItem('dataList'));
    const filteredList = list.filter((idol) => !faovorite.includes(idol.id));
    setIdols(filteredList);
  };

  const handleIdolToggle = (id) => {
    if (!favoriteIdols.includes(id)) {
      setFavoriteIdols([...favoriteIdols, id]);
    } else {
      setFavoriteIdols(favoriteIdols.filter((idol) => idol !== id));
    }
  };

  const addFavoriteIdol = () => {
    let dataArray = JSON.parse(localStorage.getItem('dataList')) || [];
    dataArray.push(...favoriteIdols);
    dataArray = new Set(dataArray);
    dataArray = [...dataArray].sort();
    localStorage.setItem('dataList', JSON.stringify(dataArray));
    setFavoriteIdols([]);
  };

  useEffect(() => {
    getIdolList();
  }, [favoriteIdols]);

  return (
    <div>
      <h2 className="mb-[32px] text-2xl font-semibold">
        관심있는 아이돌을 추가해보세요.
      </h2>
      <ul className="flex flex-wrap gap-6">
        {idols.map((idol) => (
          <li key={idol.id}>
            <button
              type="button"
              onClick={() => handleIdolToggle(idol.id)}
              aria-label={`${idol.name} 썸네일`}
            >
              <IdolThumbnail
                checked={favoriteIdols.includes(idol.id)}
                name={idol.name}
                group={idol.group}
                src={idol.profilePicture}
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-[32px] flex justify-center">
        <Button type="round" onClick={addFavoriteIdol}>
          {' '}
          + 추가하기{' '}
        </Button>
      </div>
    </div>
  );
}

export default MyPageIdol;
