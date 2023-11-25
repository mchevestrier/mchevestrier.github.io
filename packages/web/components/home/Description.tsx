import NextImage from 'next/image';
import Socials from '../footer/Socials';

import logo from 'img/logo.min.svg';

export default function Description() {
  return (
    <div className="mx-auto max-w-max">
      <h1 className="text-6xl font-bold py-4 text-white">
        <div className="flex flex-wrap items-center">
          <NextImage src={logo} alt="" className="inline pr-4 w-20 h-auto" width="100" height="100" />
          <span className="text-[#fffaf1] [text-shadow:1px_1px_16px_#f85f7362]">Martin Chevestrier</span>
        </div>
      </h1>
      <div className="p-2 max-w-max"><Socials /></div>
      <div className="text-2xl text-[#fff6e5] text-justify max-w-[40rem] space-y-3 py-4">
        <p>
          Graduated from a French business school and currently employed in the marketing team
          of an e-learning scale-up, I am looking for some professional challenge in a company
          that can make use of both my business background and technical skills.
        </p>
        <p>
          I specialize in web development and digital marketing,
          as well as data analysis and automation.
        </p>
        <p>On a personal level, I&apos;m also interested in cybersecurity and linguistics. </p>
      </div>
    </div>
  )
}