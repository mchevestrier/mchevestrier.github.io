import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

import Logo from './logo';

function MenuItem({
  href, children, active = false, color, onClick,
}) {
  return (
    <li>
      { active
        ? (
          <div className="block font-semibold pr-3 md:px-6 py-3 md:py-2 rounded md:rounded-full cursor-default">
            { children }
            <div className={cn('mt-1 mr-1 md:mr-auto ml-auto md:mx-auto h-1 rounded-full w-2', color)} />
          </div>
        )
        : (
          <Link href={href} passHref>
            <a
              onClick={onClick}
              href=""
              className="block font-semibold pr-3 md:px-6 py-3 md:py-2 rounded md:rounded-full hover:bg-gray-800 focus:bg-gray-800"
            >
              { children }
            </a>
          </Link>
        )}
    </li>
  );
}

export default function Header({ pageProps }) {
  const [isMenuOpen, openMenu] = useState(false);
  const toggleMenu = () => {
    openMenu(!isMenuOpen);
  };

  const router = useRouter();
  const [pathname, setPathname] = useState();
  useEffect(() => {
    setPathname(new URL(window.document.URL).pathname);
  }, [router.pathname]);

  return (
    <header className="md:flex py-2">
      <div className="flex p-4 gap-10 justify-between items-stretch w-full md:w-max">
        <Link href="/" passHref>
          <a>
            <div className="flex flex-wrap text-3xl gap-2 items-center w-full md:w-max">
              <Logo className="w-8 h-8 inline text-red-400" />
              {' '}
              <span>Martin Chevestrier</span>
            </div>
          </a>
        </Link>
        <button
          type="button"
          aria-label="Menu"
          onClick={toggleMenu}
          className="md:hidden w-max flex justify-end text-right"
        >
          <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      <nav className="flex justify-end md:justify-center flex-wrap text-xl w-full px-2 pt-3">
        <ul
          className={cn(
            'w-full items-start pr-2 md:flex gap-4 md:flex-wrap text-right justify-end md:justify-center',
            {
              'hidden md:block': !isMenuOpen,
            },
          )}

        >
          { typeof pageProps.allPostsData === 'undefined' ? '' : pageProps.allPostsData.map(({ title, slug, bgColor }) => (
            <MenuItem
              href={`/p/${slug}`}
              key={slug}
              active={typeof pathname !== 'undefined' && pathname.includes(`/p/${slug}`)}
              color={bgColor}
              onClick={() => { openMenu(false); }}
            >
              { title }
            </MenuItem>
          )) }
        </ul>
      </nav>
    </header>
  );
}
