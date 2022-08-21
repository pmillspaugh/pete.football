/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // https://styled-components.com/docs/advanced#with-swc
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
