import IcCheck from '../assets/imgs/ic_check.svg';

function CheckedIdolAvatar({ alt, src, size }) {
  const sizes = {
    small: 'size-[70px]',
    medium: 'size-[100px]',
    large: 'size-[128px]',
  };

  return (
    <div
      className={`rounded-full border-2 ${sizes[size]} relative border-pointOrangePink p-[6px]`}
    >
      <img
        src={IcCheck}
        alt="체크 표시"
        className="absolute inset-0 z-20 m-auto size-[52px]"
      />
      <div className="z-10 size-full overflow-hidden rounded-full  bg-gradient-to-r from-[#F96E68] to-[#FE578F] object-cover">
        <img
          src={src}
          alt={alt}
          className="size-full object-cover opacity-50"
        />
      </div>
    </div>
  );
}

export default CheckedIdolAvatar;
