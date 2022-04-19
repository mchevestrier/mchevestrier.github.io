import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import TagManager from 'react-gtm-module';

import '../styles/main.css';

import Layout from '../components/layout';
import Image from '../components/image';
import Main from '../components/main';
import Section from '../components/section';
import Button from '../components/button';

import BlockList from '../components/blocks/blocklist';
import Tile from '../components/blocks/tile';
import Card from '../components/blocks/card';
import Item from '../components/blocks/item';

const components = {
  img: Image,
  Main,
  Section,
  BlockList,
  Tile,
  Card,
  Item,
  Button,
  // eslint-disable-next-line jsx-a11y/heading-has-content, react/jsx-props-no-spreading
  h1: (props) => <h1 {...props} className="text-3xl text-white text-center font-bold pb-4 pt-12" />,
  // eslint-disable-next-line jsx-a11y/heading-has-content, react/jsx-props-no-spreading
  h2: (props) => <h2 {...props} className="text-2xl text-white text-center font-bold py-4" />,
  // eslint-disable-next-line jsx-a11y/heading-has-content, react/jsx-props-no-spreading
  h3: (props) => <h3 {...props} className="text-xl text-white text-center font-bold py-4" />,
};

const gtm = 'GTM-K44HN4Z';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: gtm,
    });
  }, []);

  return (
    <MDXProvider components={components}>
      <Layout pageProps={pageProps}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
