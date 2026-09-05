/** @type {import('next').NextConfig} */
const nextConfig = {
  // Node.js SSR 및 중앙 DB Dynamic API 지원
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      }
    ],
  },
};

module.exports = nextConfig;
