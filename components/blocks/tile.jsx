import cn from 'classnames';
import Image from '../image';

export default function Tile({
  name, icon, level = 0, children,
}) {
  return (
    <div className="w-36 h-36 text-center flex flex-wrap place-items-center place-content-center">
      <div className="w-full text-center">
        { icon
          ? <Image src={icon} height="64" width="64" alt={name} />
          : '' }
        <div className="font-bold">{ name }</div>
        { typeof level !== 'undefined' ? (
          <div className="flex pt-4 justify-center">
            {
                            Array(3).fill(0).map((e, i) => (
                              <span
                                // eslint-disable-next-line react/no-array-index-key
                                key={i}
                                className={cn(
                                  'block w-4 h-1 mx-1 rounded-full',
                                  i >= level ? 'bg-gray-600' : 'bg-gray-50 shadow-[0_0_4px_1px_rgba(255,255,255,.2)]',
                                )}
                              />
                            ))
                        }
          </div>
        )
          : '' }
        { children }
      </div>
    </div>
  );
}
