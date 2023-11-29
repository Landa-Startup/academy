// @type {import('next').NextConfig}
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/common/:path*',
        destination: 'http://127.0.0.1/:path*'
      },
      {
        source: '/get-csrf-token/:path*',
        destination: 'http://127.0.0.1/:path*'
      }
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'panel.landaholding.com',
      'localhost:8000',
      'localhost',
      '127.0.0.1',
      '127.0.0.1:8000',
      "academy-back.landaholding.com"
    ]
  }
};

module.exports = nextConfig;
