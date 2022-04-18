import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';

import Hero from '../components/hero';
import { getSortedPostsData } from '../lib/pages'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Martin Chevestrier</title>
      </Head>

      <div>
        <Hero />
        <div className="w-full sm:w-max mx-auto pt-12 px-6 grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 sm:gap-8 md:gap-12 place-content-center place-items-center">
          { allPostsData.map(({ title, slug, bgColor, icon }) => {
            return (
              <Link key={ slug } href={ `/p/${slug}` } passHref>
                <a>
                  <div  className={cn(
                    "bg-gray-800 flex max-w-full",
                    "text-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.39)]",
                    "hover:scale-[1.014] transition ease-out duration-[400ms] hover:ease-in hover:duration-150",
                    `${ bgColor }`
                  )}>
                    <div className={cn("shadow-[inset_-3px_-4px_1px_0_rgba(0,0,0,0.2)] cursor-pointer h-40 w-40 sm:h-60 sm:w-60 max-w-full p-2 sm:p-6 md:p-8 rounded-2xl flex place-content-center place-items-center")}>
                        <div>
                          <div className="w-16 sm:w-32 max-w-fit mx-auto" dangerouslySetInnerHTML={{ __html: icon }}></div>
                          <strong className="text-lg">{ title }</strong>
                        </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          }) }
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}
