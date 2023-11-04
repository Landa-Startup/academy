/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/common/contactUs-form',
        destination: 'http://127.0.0.1/',
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'panel.landaholding.com','localhost:8000','localhost','127.0.0.1','127.0.0.1:8000'],
  },
};

module.exports = nextConfig;
