import { useState } from 'react';

import insertLocalStorage from '../utils/insertLocalStorage';
import IdolThumbnail from './IdolThumbnail';
import Button from './buttons/Button';

function MyPageIdol({ idols, onChange }) {
  const [IsFavorite, setIsFavorite] = useState([]);

  const handleIdolToggle = (idol) => {
    // 아이돌이 선택된건지 선택 해제하는건지 확인
    if (IsFavorite.includes(idol)) {
      // 이미 선택된 아이돌을 다시 선택했으면 선택 해제이므로 IsFavorite에서 해당 아이돌을 제외
      setIsFavorite(IsFavorite.filter((data) => data.id !== idol.id));
    } else {
      // 한 번 선택된 아이돌은 IsFavorite에 추가
      setIsFavorite([...IsFavorite, idol]);
    }
  };

  const addFavoriteIdol = () => {
    // 로컬 스토리지에 선택된 아이돌 저장
    const localData = insertLocalStorage('Mypage_FavoriteIdol', IsFavorite);

    // 상위 컴포넌트에 선택된 아이돌의 데이터 보내줌
    onChange(localData);
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
              onClick={() => handleIdolToggle(idol)}
              aria-label={`${idol.name} 썸네일`}
            >
              <IdolThumbnail
                size="large"
                checked={IsFavorite.includes(idol)}
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
