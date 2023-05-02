"use client";

import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import NextImage from 'next/image';

import logo from 'img/logo.min.svg';
import MenuItem from './MenuItem';

import type { PageMetadata } from 'types/metadata';

type Props = {
  pages: Array<PageMetadata>,
}
export default function Header({ pages }: Props) {
  const [isMenuOpen, openMenu] = useState(false);
  const toggleMenu = () => {
    openMenu(!isMenuOpen);
  };

  return (
    <header className="md:flex py-2">
      <div className="flex p-4 gap-10 justify-between items-stretch w-full md:w-max">
        <Link href="/" passHref>
          <div className="flex flex-wrap text-3xl gap-2 items-center w-full md:w-max">
            <NextImage src={logo} alt="" className="inline pr-4 w-16 h-auto" width="100" height="100" />
            <span className="font-semibold">Martin Chevestrier</span>
          </div>
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
          { typeof pages === 'undefined' ? null : pages.map(({ title, slug, other: {bgColor} }) => (
            <MenuItem
              href={`/p/${slug}`}
              key={slug}
              active={false}
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
