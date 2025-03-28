/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configuration for Next.js 15.2.2
  reactStrictMode: true,
}

module.exports = nextConfig
