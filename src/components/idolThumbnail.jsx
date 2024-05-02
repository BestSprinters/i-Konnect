import CheckedIdolAvatar from './CheckedIdolAvatar';
import IdolAvatar from './IdolAvatar';

function IdolThumbnail({ checked, group, name, src }) {
  return (
    <>
      {checked ? (
        <CheckedIdolAvatar alt={name} src={src} size="large" />
      ) : (
        <IdolAvatar alt={name} src={src} size="large" />
      )}

      <dl className="mt-1.5 text-center">
        <dt className="text-base">{name}</dt>
        <dd className="mt-0.5 text-sm opacity-60">{group}</dd>
      </dl>
    </>
  );
}

export default IdolThumbnail;
