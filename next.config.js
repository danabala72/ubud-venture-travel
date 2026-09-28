/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoPath = '/ubud-venture-travel';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub project Pages is physically hosted below the repository path.
  // On a future root/custom-domain deployment no prefix is applied.
  basePath: isGithubPages ? repoPath : '',
  assetPrefix: isGithubPages ? `${repoPath}/` : '',
};

module.exports = nextConfig;
