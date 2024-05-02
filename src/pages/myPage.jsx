import { useEffect, useState } from 'react';

import getIdols from '../apis/idols/getIdolsApi';
import FavoriteIdol from '../components/FavoriteIdol';
import MyPageIdol from '../components/MyPageIdol';

function Mypage() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  // 이름 확인
  const [changeIdols, setChangeIdols] = useState(
    JSON.parse(localStorage.getItem('Mypage_FavoriteIdol')) || [],
  );

  const getIdolList = async () => {
    const { list } = await getIdols({ pageSize: 16 });

    const filteredIdolList = list.filter(
      (idol) => !changeIdols.includes(idol.id),
    );
    const filteredFavoriteIdols = list.filter((idol) =>
      changeIdols.includes(idol.id),
    );
    setIdols(filteredIdolList);
    setFavoriteIdols(filteredFavoriteIdols);
  };

  const handleChangeFavorite = (idol) => {
    setChangeIdols(idol);
  };

  useEffect(() => {
    getIdolList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeIdols]);
  return (
    <div className="mx-auto mt-[80px] max-w-7xl">
      <FavoriteIdol idols={favoriteIdols} />
      <MyPageIdol idols={idols} onChange={handleChangeFavorite} />
    </div>
  );
}

export default Mypage;
