const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
      svgo: {
        plugins: [
          'convertStyleToAttrs',
          'sortAttrs',
          'reusePaths',
        ],
      },
    }],
  ], withMDX({
    reactStrictMode: true,
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
      loader: "custom",
      disableStaticImages: true, // To optimize images at build time: https://github.com/cyrilwanner/next-optimized-images
    },
    trailingSlash: true, // /mypage/index.html
}));
