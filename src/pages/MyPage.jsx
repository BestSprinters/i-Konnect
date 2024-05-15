import { useEffect, useState } from 'react';

import getIdols from '../apis/idols/getIdolsApi';
import FavoriteIdol from '../components/FavoriteIdol';
import Header from '../components/Header';
import InnerAnimation from '../components/InnerAnimation';
import MyCredit from '../components/MyCredit';
import MyPageIdol from '../components/MyPageIdol';

function MyPage() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [changeIdols, setChangeIdols] = useState(
    JSON.parse(localStorage.getItem('myPage_FavoriteIdol')) || [],
  );
  const [pageSizeChange, setPageSizeChange] = useState();
  const [selectedGender, setSelectedGender] = useState('');
  const [search, setSearch] = useState('');

  const handleChangeFavorite = (idol) => {
    setChangeIdols(idol);
  };

  const handleChangeGender = (gender) => {
    setSelectedGender(gender);
  };

  const handleSearchValue = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    const getIdolList = async () => {
      const { list } = await getIdols({
        pageSize: 10000,
        keyword: search,
      });

      // 로컬 스토리지의 있는 아이돌들의 id만 추출해서 배열로 만듦
      const changeIdolIds = changeIdols.map((idol) => idol.id);

      // 관심있는 아이돌을 제외하고 아이돌 리스트 출력
      const filteredIdolList = list.filter(
        (idol) => !changeIdolIds.includes(idol.id),
      );

      // 관심있는 아이돌을 제외하고 젠더 구분해서 리스트 출력
      const selectedGenderIdols = filteredIdolList.filter(
        (idol) => idol.gender === selectedGender,
      );

      // 관심있는 아이돌의 배열 길이만큼 pageSize에 추가
      setPageSizeChange(changeIdolIds.length);

      // 셀렉트 필터가 선택되면 필터된 아이돌이 출력
      if (selectedGender === '') {
        setIdols(filteredIdolList);
      } else {
        setIdols(selectedGenderIdols);
      }
    };

    setFavoriteIdols(changeIdols);
    getIdolList();
  }, [pageSizeChange, changeIdols, selectedGender, search]);

  return (
    <div className="desktop:base-container my-[80px]">
      <Header />
      <InnerAnimation>
        <MyCredit />
        <FavoriteIdol idols={favoriteIdols} onChange={handleChangeFavorite} />
        <MyPageIdol
          idols={idols}
          onChange={handleChangeFavorite}
          gender={handleChangeGender}
          search={handleSearchValue}
        />
      </InnerAnimation>
    </div>
  );
}

export default MyPage;
