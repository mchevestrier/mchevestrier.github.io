import Link from 'next/link';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="px-4 py-6 text-center space-y-6 bg-[#161819]">
      <Socials />
      <div>
        <span>
          Made with
          {' '}
          <span className="text-red-500">❤</span>
          {' '}
          by
          {' '}
          <Link href="/" className="underline">Martin Chevestrier</Link>
        </span>
      </div>
    </footer>
  );
}
