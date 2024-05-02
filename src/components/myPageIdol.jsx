import { useState } from 'react';

import insertLocalStorage from '../utils/insertLocalStorage';
import IdolThumbnail from './IdolThumbnail';
import Button from './buttons/Button';

function MyPageIdol({ idols, onChange }) {
  const [IsFavorite, setIsFavorite] = useState([]);

  const handleIdolToggle = (id) => {
    if (!IsFavorite.includes(id)) {
      setIsFavorite([...IsFavorite, id]);
    } else {
      setIsFavorite(IsFavorite.filter((idol) => idol !== id));
    }
  };

  const addFavoriteIdol = () => {
    const localDate = insertLocalStorage('Mypage_FavoriteIdol', IsFavorite);
    onChange(localDate);
    setIsFavorite([]);
  };

  return (
    <div>
      <h2 className="mb-[32px] text-2xl font-semibold">
        관심있는 아이돌을 추가해보세요.
      </h2>
      <ul className="flex flex-wrap gap-6">
        {idols?.map((idol) => (
          <li key={idol.id}>
            <button
              type="button"
              onClick={() => handleIdolToggle(idol.id)}
              aria-label={`${idol.name} 썸네일`}
            >
              <IdolThumbnail
                size="large"
                checked={IsFavorite.includes(idol.id)}
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
