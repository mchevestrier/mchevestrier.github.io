import Link from 'next/link';
import cn from 'classnames';

import type { PageMetadata } from "types/metadata";

type Props = {
  page: PageMetadata
}

export default function SectionButton({ page: { title, slug, other: { bgColor, icon } } }: Props) {
  return (
    <Link key={slug} href={`/p/${slug}`}>
      <div className={cn(
        'rounded-3xl sm:rounded-[1rem] shadow-[0_8px_20px_rgb(0,0,0,0.2)]',
        'text-center  bg-[#3d3a3d] flex max-w-full',
        'hover:scale-[1.014] transition ease-out duration-[400ms] hover:ease-in hover:duration-150',
      )}
      >
        <div className={cn([
          'rounded-3xl sm:rounded-[1rem] shadow-[inset_-2px_-3px_1px_0_rgba(0,0,0,0.2)] cursor-pointer h-40 w-40 sm:h-52 sm:w-52',
          'max-w-full p-2 sm:p-6 md:p-8 flex place-content-center place-items-center'])}
        >
          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <div
              dangerouslySetInnerHTML={{ __html: icon }}
              className="w-16 sm:w-32 max-w-fit mx-auto"
              style={{color: bgColor}}
            />
            <strong className="text-lg">{ title }</strong>
          </div>
        </div>
      </div>
    </Link>
  )
}