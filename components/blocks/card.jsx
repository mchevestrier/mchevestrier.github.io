import Image from '../image';

export default function Card({
  company, logo, place, children,
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-2 shadow-[1px_3px_6px_rgb(0,0,0,0.3)]">
      <div className="flex justify-between gap-2">
        <div className="flex place-items-center gap-2">
          { logo
            ? (
              <div className="p-2 flex place-items-center">
                <Image src={logo} height="32" width="32" alt={company} className="rounded-lg" />
              </div>
            )
            : '' }
          <h2 className="text-lg text-white font-bold">{ company }</h2>
        </div>
        { !place ? ''
          : (
            <div className="flex place-items-center gap-1 pr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="font-semibold">{ place }</div>
            </div>
          )}
      </div>
      { children }
    </div>
  );
}
