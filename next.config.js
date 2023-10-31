/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'panel.landaholding.com','http://localhost:8000','localhost:8000','localhost'],
  },
};

module.exports = nextConfig;
