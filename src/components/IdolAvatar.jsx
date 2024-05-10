/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/**
 * * size는 s, m, l로 나누었습니다.
 * TODO : 모바일에서 98x98 사이즈가 있는데 추가해야될지 100x100으로 유지 할 지 모르겠습니다.
 */
function IdolAvatar({ alt, src, size, onClick }) {
  // * tailwind에서 className={`size-${size}`} 같이 동적으로 사용할 수 없어
  // * 따로 변수를 만들어 관리하였습니다.
  // * 참조 : https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const sizes = {
    small: 'size-[70px]',
    medium: 'size-[100px]',
    large: 'size-[128px]',
  };

  return (
    <div
      className={`rounded-full border-2 ${sizes[size]} border-pointOrangePink`}
    >
      <img
        src={src}
        alt={alt}
        className="size-full rounded-full object-cover p-[6px]"
        onClick={onClick}
      />
    </div>
  );
}

export default IdolAvatar;
