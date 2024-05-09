import icDelete from '../assets/imgs/ic_delete.svg';
import IdolThumbnail from './IdolThumbnail';

function FavoriteIdol({ idols, onChange }) {
  const removeIdolById = (idToRemove) => {
    // 로컬스토리지에서 데이터 가져오기
    const storedData = localStorage.getItem('myPage_FavoriteIdol');
    if (!storedData) return; // 데이터가 없으면 함수 종료

    // 가져온 데이터 파싱
    let favoriteIdols = JSON.parse(storedData);

    // 해당 ID를 가진 객체 찾아서 삭제
    favoriteIdols = favoriteIdols.filter((idol) => idol.id !== idToRemove);

    // 수정된 데이터 다시 로컬스토리지에 저장
    localStorage.setItem('myPage_FavoriteIdol', JSON.stringify(favoriteIdols));

    onChange(favoriteIdols);
  };

  return (
    <div className="mb-[42px] border-b border-[#FFFFFF1A] pb-[42px]">
      <h2 className="mb-[32px] text-2xl font-semibold">내가 관심있는 아이돌</h2>
      <ul className="flex flex-wrap gap-6">
        {idols.length === 0 ? (
          <li className="w-full border border-pointOrangePink py-[80px] text-center">
            <p className="font-extralight">텅...</p>
          </li>
        ) : (
          idols?.map((idol) => (
            <li key={idol.id} className="relative">
              <button
                type="button"
                className="absolute right-0"
                onClick={() => removeIdolById(idol.id)}
              >
                <img src={icDelete} alt="삭제" className="size-[32px]" />
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
