import type { Metadata, PageMetadata } from 'types/metadata';

import { metadata as dataMetadata } from 'app/p/data/page';
import { metadata as educationMetadata } from 'app/p/education/page';
import { metadata as experienceMetadata } from 'app/p/experience/page';
import { metadata as marketingMetadata } from 'app/p/marketing/page';
import { metadata as webMetadata } from 'app/p/web/page';

export default function getPages(): PageMetadata[] {
  const metadatas: Array<[string, Metadata]> = [
    ['data',       dataMetadata],
    ['education',  educationMetadata],
    ['experience', experienceMetadata],
    ['marketing',  marketingMetadata],
    ['web',        webMetadata],
  ];

  const pages = metadatas.map(([slug, metadata]) => ({...metadata, slug}));

  // Sort posts by order
  const sortedPages = pages.sort(
    ({other: { order: a }}, {other: { order: b }}) => {
      return Math.sign(a - b);
    });

  return sortedPages;
}
