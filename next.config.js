/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auto-promo-ph-api.onrender.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.2',
        port: '3001',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
