/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    appDir: true,
  },

  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
