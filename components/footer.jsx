import Link from 'next/link';
import Socials from './socials';

export default function Footer() {
  return (
    <footer className="px-4 pt-20 pb-6 text-center">
      <span>
        Made with
        {' '}
        <span className="text-red-500">❤</span>
        {' '}
        by
        {' '}
        <Link href="/" passHref><a className="underline">Martin Chevestrier</a></Link>
      </span>
      <Socials />
    </footer>
  );
}
