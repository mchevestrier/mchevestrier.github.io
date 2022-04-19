import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Graduated from a French business school and currently employed in the marketing team of an e-learning scale-up, I am looking for some professional challenge in a company that can make use of both my business background and technical skills. " />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
