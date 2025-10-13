/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/register',
        headers: [
          // base64 -> forensiq{header_infiltrated}
          { key: 'X-ForensIQ-Shadow', value: 'Zm9yZW5zaXF7aGVhZGVyX2luZmlsdHJhdGVkfQ==' },
        ],
      },
    ]
  },
};

export default nextConfig;
