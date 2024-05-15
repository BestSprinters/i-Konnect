import CheckedIdolAvatar from './CheckedIdolAvatar';
import IdolAvatar from './IdolAvatar';

function IdolThumbnail({ checked = false, group, name, src, size }) {
  return (
    <>
      {checked ? (
        <CheckedIdolAvatar alt={name} src={src} size={size} />
      ) : (
        <IdolAvatar alt={name} src={src} size={size} />
      )}

      <dl className="mobile: mx-auto mt-1.5 text-center mobile:w-[85px] tablet:w-[100px] desktop:w-[102px]">
        <dt className="text-base">{name}</dt>
        <dd className="mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap break-all text-sm opacity-60">
          {group}
        </dd>
      </dl>
    </>
  );
}

export default IdolThumbnail;
