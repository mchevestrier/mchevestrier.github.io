import GoogleTagManager from '../components/GoogleTagManager';
import Layout from '../components/Layout';
import getPages from '../lib/pages';

import '../styles/main.css';

export const metadata = {
  title: {
    default: 'Martin Chevestrier',
    template: '%s | Martin Chevestrier',
  },
  description: "Graduated from a French business school and currently employed in the marketing team of an e-learning scale-up, I am looking for some professional challenge in a company that can make use of both my business background and technical skills. ",
  robots: "index, nofollow",
  icons: {
    icon: "/favicon.ico",
  }
};

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = getPages();

  return (
    <html lang="en">
      <GoogleTagManager />
      <body>
        <Layout pages={pages}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
