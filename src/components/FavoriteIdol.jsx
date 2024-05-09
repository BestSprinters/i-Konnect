import deleteImg from '../assets/imgs/ic_delete.svg';
import IdolThumbnail from './IdolThumbnail';

function FavoriteIdol({ idols, onChange }) {
  const removeIdolById = (idToRemove) => {
    // 로컬스토리지에서 데이터 가져오기
    const storedData = localStorage.getItem('MyPage_FavoriteIdol');
    if (!storedData) return; // 데이터가 없으면 함수 종료

    // 가져온 데이터 파싱
    let favoriteIdols = JSON.parse(storedData);

    // 해당 ID를 가진 객체 찾아서 삭제
    favoriteIdols = favoriteIdols.filter((idol) => idol.id !== idToRemove);

    // 수정된 데이터 다시 로컬스토리지에 저장
    localStorage.setItem('MyPage_FavoriteIdol', JSON.stringify(favoriteIdols));

    onChange(favoriteIdols);
  };

  return (
    <div className="mobile:pl-[24px] tablet:pl-[24px]">
      <h2 className="mb-[32px] text-2xl font-semibold mobile:hidden">
        내가 관심있는 아이돌
      </h2>
      <ul className="modile:scroll-smooth no-scrollbar grid w-full grid-flow-col grid-rows-2 gap-6 mobile:snap-x mobile:overflow-x-scroll tablet:snap-x tablet:overflow-x-scroll tablet:scroll-smooth desktop:flex desktop:flex-wrap">
        {idols.length === 0 ? (
          <li className="w-full border border-pointOrangePink py-[80px] text-center">
            <p className="font-extralight">텅...</p>
          </li>
        ) : (
          idols?.map((idol) => (
            <li
              key={idol.id}
              className="relative mobile:snap-start tablet:snap-start"
            >
              <button
                type="button"
                className="absolute right-0"
                onClick={() => removeIdolById(idol.id)}
              >
                <img src={deleteImg} alt="삭제" className="size-[32px]" />
              </button>
              <IdolThumbnail
                size="medium"
                name={idol.name}
                group={idol.group}
                src={idol.profilePicture}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default FavoriteIdol;
