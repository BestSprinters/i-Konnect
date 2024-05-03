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
  const [pageSizeChange, setPageSizeChange] = useState();

  const handleChangeFavorite = (idol) => {
    setChangeIdols(idol);
  };

  useEffect(() => {
    const getIdolList = async () => {
      const { list } = await getIdols({ pageSize: 16 + pageSizeChange });

      // 로컬 스토리지의 있는 아이돌들의 id만 추출해서 배열로 만듦
      const changeIdolIds = changeIdols.map((idol) => idol.id);
      // 관심있는 아이돌을 제외하고 아이돌 리스트 출력
      const filteredIdolList = list.filter(
        (idol) => !changeIdolIds.includes(idol.id),
      );

      setIdols(filteredIdolList);

      // 관심있는 아이돌의 배열 길이만큼 pageSize에 추가
      setPageSizeChange(changeIdolIds.length);
    };

    setFavoriteIdols(changeIdols);
    getIdolList();
  }, [changeIdols, pageSizeChange]);
  return (
    <div className="mx-auto mt-[80px] max-w-7xl">
      <FavoriteIdol idols={favoriteIdols} onChange={handleChangeFavorite} />
      <MyPageIdol idols={idols} onChange={handleChangeFavorite} />
    </div>
  );
}

export default Mypage;
