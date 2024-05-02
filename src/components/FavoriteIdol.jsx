import deleteImg from '../assets/imgs/ic_delete.svg';
import IdolThumbnail from './IdolThumbnail';

function FavoriteIdol({ idols }) {
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
              <button type="button" className="absolute right-0 ">
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
