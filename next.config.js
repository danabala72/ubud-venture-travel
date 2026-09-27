/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/ubud-venture-travel',
  assetPrefix: '/ubud-venture-travel/',
};

module.exports = nextConfig;
