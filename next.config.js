/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "api.primemetalproducts.com",
      "files.primemetalproducts.com",
      "residential.primemetalproducts.com",
    ],
  },
};

module.exports = nextConfig;
