import cn from 'classnames';

import Hero from '../components/home/Hero';
import LayeredWavesDivider from '../components/home/LayeredWavesDivider';
import ArrowDivider from '../components/home/ArrowDivider';
import SectionButton from 'components/home/SectionButton';

import getPages from '../lib/pages';

export default async function Page() {
  const pages = getPages();

  return (
    <div>
      <Hero />

      <LayeredWavesDivider />
      <div className="bg-[#272427]">
        <div className={cn([
          'w-full mx-auto pt-16 pb-40 px-6',
          'flex flex-wrap items-center justify-center',
          'gap-4 sm:gap-8 md:gap-12 place-content-center place-items-center'])}
        >
          { pages.map((page) => (
            <SectionButton page={page} key={page.slug} />
          )) }
        </div>
      </div>

      <ArrowDivider />
    </div>
  );
}
