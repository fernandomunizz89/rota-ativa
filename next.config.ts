import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // O utilizador pediu para testar em mobile, pelo que abrimos para o seu IP local
  allowedDevOrigins: ['192.168.31.122', 'localhost'],
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
