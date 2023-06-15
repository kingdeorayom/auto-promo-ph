/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['192.168.1.2'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auto-promo-ph-api.onrender.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
