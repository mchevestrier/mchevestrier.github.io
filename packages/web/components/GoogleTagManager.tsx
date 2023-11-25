"use client";

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const gtm = 'GTM-K44HN4Z';

export default function GoogleTagManager() {
  useEffect(() => {
    TagManager.initialize({
      gtmId: gtm,
    });
  }, []);
  return (<></>);
}
