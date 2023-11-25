import Header from './header/Header';
import Footer from './footer/Footer';
import type { PageMetadata } from 'types/metadata';

type Props = {
  children: React.ReactNode,
  pages: PageMetadata[],
};

export default function Layout({ children, pages }: Props) {
  return (
    <div id="page"
      className="bg-[#161819] min-h-screen text-gray-50"
      style={{
        backgroundImage: `radial-gradient(circle at 42vw 52vh, #d3453799 0vw, #d3453722 16vw, transparent 22vw),
                          radial-gradient(circle at 52vw 54vh, #664a62aa 0vw, #664a6233 10vw, transparent 24vw),
                          radial-gradient(circle at 68vw 58vh, #6a3b8fcc 0vw, #6a3b8f55 12vw, transparent 26vw)`,
        backgroundAttachment: 'fixed',
      }}
    >
      <Header pages={pages} />
      <main className="min-h-[calc(100vh-220px)]">{ children }</main>
      <Footer />
    </div>
  );
}
