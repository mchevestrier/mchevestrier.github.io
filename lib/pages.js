import fs from 'fs';
import path from 'path';

import slugify from './utils';

const postsDirectory = path.join(process.cwd(), 'pages/p');

function getPosts() {
  // Get file names
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = {};
  fileNames.forEach((fileName) => {
    // Use file name to get slug
    const slug = slugify(fileName.replace(/\.mdx?$/, ''));

    // Combine the data with the slug
    posts[slug] = {
      filename: fileName,
    };
  });
  return posts;
}

export default async function getSortedPostsData() {
  const posts = getPosts();
  // Get file names under /posts
  const allPostsData = await Promise.all(Reflect.ownKeys(posts).map(async (slug) => {
    // Post metadata section
    const metadata = await import(`../pages/p/${slug}.mdx`).then((mod) => mod.metadata);

    // Combine the data with the slug
    return {
      slug,
      ...metadata,
    };
  }));

  // Sort posts by order
  return allPostsData
    .sort(({ order: a }, { order: b }) => {
      if (a < b) {
        return -1;
      } if (a > b) {
        return 1;
      }
      return 0;
    });
}
