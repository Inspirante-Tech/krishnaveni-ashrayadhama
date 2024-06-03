import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com','cdn.pixabay.com', 'media.istockphoto.com','images.ctfassets.net',"cruip-tutorials.vercel.app",'wallpapercave.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },
  // ...other config settings
};

export default withNextIntl(nextConfig);
 