/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.pngmart.com','images.unsplash.com','cdn.pixabay.com', 'media.istockphoto.com','images.ctfassets.net',"cruip-tutorials.vercel.app",'wallpapercave.com'],
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

export default nextConfig;