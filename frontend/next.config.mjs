/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dzdpmnb00/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
