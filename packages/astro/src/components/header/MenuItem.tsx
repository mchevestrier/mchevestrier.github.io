import cn from "classnames";

import type { MouseEventHandler } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  active: boolean;
  color: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
export default function MenuItem({
  href,
  children,
  active = false,
  color,
  onClick,
}: Props) {
  return (
    <li>
      {active ? (
        <div className="block font-semibold pr-3 md:px-6 py-3 md:py-2 rounded-sm md:rounded-full cursor-default">
          {children}
          <div
            className={cn(
              "mt-1 mr-1 md:mr-auto ml-auto md:mx-auto h-[0.3rem] rounded-full w-[0.4rem]",
            )}
            style={{ backgroundColor: color }}
          />
        </div>
      ) : (
        <a
          href={href}
          onClick={onClick}
          className="block font-semibold pr-3 md:px-6 py-3 md:py-2 rounded-sm md:rounded-full hover:bg-[#1d2021cc] focus:bg-[#1d2021cc]"
        >
          {children}
        </a>
      )}
    </li>
  );
}
