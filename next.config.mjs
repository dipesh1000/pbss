/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'http://localhost',
      'https://cloudfront-us-east-2.images.arcpublishing.com/',
      'https://api.personalbestsupportservices.com.au/',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.personalbestsupportservices.com.au',
        port: '', // Include port if necessary
        pathname: '/wp-content/uploads/**', // Adjust the path to match your media URLs
      },
    ],
  },
};

export default nextConfig;
