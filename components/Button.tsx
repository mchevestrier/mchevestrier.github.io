import Link from 'next/link';
import cn from 'classnames';
import type { HTMLAttributeAnchorTarget } from 'react';
import type { Url } from 'next/dist/shared/lib/router/router';

type Props = {
  href: Url,
  className?: string,
  target: HTMLAttributeAnchorTarget,
  children: React.ReactNode,
};

export default function Button({
  href, className, target, children,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'block w-max text-lg font-semibold text-black bg-white px-3 py-1 mx-auto mt-8 mb-3 rounded-lg shadow-[1px_3px_10px_rgb(0,0,0,0.4)] hover:shadow-3xl focus:shadow-3xl hover:scale-[1.03] focus:scale-[1.03] hover:bg-gray-200 focus:bg-gray-200 duration-100',
        className,
      )}
      target={target}
      rel="nofollow"
    >
      { children }
    </Link>
  );
}
