import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }, {
        protocol: "https",
        hostname: "wallpapercave.com"
      }
    ],
  },
  experimental: {
    taint: true,
  },
  // ...other config settings
};

export default withNextIntl(nextConfig);
