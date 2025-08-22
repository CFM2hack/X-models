// In: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- THIS IS THE FIX ---
  // This block tells Next.js that it's allowed to connect to
  // 'picsum.photos' to fetch and optimize images.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
