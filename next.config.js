/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'auto-promo-ph-api.onrender.com', '192.168.1.2'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'auto-promo-ph-api.onrender.com',
  //       port: '',
  //       pathname: '/images/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'firebasestorage.googleapis.com',
  //       port: '',
  //       pathname: '/files/**',
  //     },
  //     {
  //       protocol: 'http',
  //       hostname: '192.168.1.2',
  //       port: '3001',
  //       pathname: '/images/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
