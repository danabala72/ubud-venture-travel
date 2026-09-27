/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubPages && {
    basePath: '/ubud-venture-travel',
    assetPrefix: '/ubud-venture-travel/',
  }),
};

module.exports = nextConfig;
