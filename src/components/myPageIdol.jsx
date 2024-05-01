import { useEffect, useState } from 'react';

import getIdols from '../apis/idols/getIdolsApi';
import IdolThumbnail from './IdolThumbnail';
import Button from './buttons/Button';

function MyPageIdol() {
  const [idols, setIdols] = useState([]);
  const [cursor, setCursor] = useState(null);

  const getIdolList = async (next) => {
    const { list, nextCursor } = await getIdols(next);
    setIdols(list);
    setCursor(nextCursor);
  };

  useEffect(() => {
    getIdolList(cursor);
  }, [idols, cursor]);

  return (
    <div>
      <h2 className="mb-[32px] text-2xl font-semibold">
        관심있는 아이돌을 추가해보세요.
      </h2>
      <ul className="flex flex-wrap gap-6">
        {idols.length === 0 ? (
          <li className="w-full py-[100px] text-center">
            <span>[ Loading ]</span>
          </li>
        ) : (
          idols.map((idol) => (
            <li key={idol.id}>
              <IdolThumbnail
                name={idol.name}
                group={idol.group}
                src={idol.profilePicture}
              />
            </li>
          ))
        )}
      </ul>
      <div className="mt-[32px] flex justify-center">
        <Button type="round"> + 추가하기 </Button>
      </div>
    </div>
  );
}

export default MyPageIdol;
