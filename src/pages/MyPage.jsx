import { useEffect, useState } from 'react';

import getIdols from '../apis/idols/getIdolsApi';
import FavoriteIdol from '../components/FavoriteIdol';
import MyPageCredit from '../components/MyPageCredit';
import MyPageIdol from '../components/MyPageIdol';

function Mypage() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  // 이름 확인
  const [changeIdols, setChangeIdols] = useState(
    JSON.parse(localStorage.getItem('myPage_FavoriteIdol')) || [],
  );
  const [pageSizeChange, setPageSizeChange] = useState();

  const handleChangeFavorite = (idol) => {
    setChangeIdols(idol);
  };

  useEffect(() => {
    const getIdolList = async () => {
      const { list } = await getIdols({ pageSize: 10000 });

      // 로컬 스토리지의 있는 아이돌들의 id만 추출해서 배열로 만듦
      const changeIdolIds = changeIdols.map((idol) => idol.id);
      // 관심있는 아이돌을 제외하고 아이돌 리스트 출력
      const filteredIdolList = list.filter(
        (idol) => !changeIdolIds.includes(idol.id),
      );

      // 관심있는 아이돌의 배열 길이만큼 pageSize에 추가
      setPageSizeChange(changeIdolIds.length);

      setIdols(filteredIdolList);
    };

    setFavoriteIdols(changeIdols);
    getIdolList();
  }, [pageSizeChange, changeIdols]);
  return (
    <div className="mx-auto mt-[80px] max-w-7xl">
      <MyPageCredit />
      <FavoriteIdol idols={favoriteIdols} onChange={handleChangeFavorite} />
      <MyPageIdol idols={idols} onChange={handleChangeFavorite} />
    </div>
  );
}

export default Mypage;