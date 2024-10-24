/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'http://localhost',
      'https://cloudfront-us-east-2.images.arcpublishing.com/',
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8888', // Include port if necessary
        pathname: '/pbss/wp-content/uploads/**', // Adjust the path to match your media URLs
      },
    ],
  },
};

export default nextConfig;
