import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'legend-physiotherapist.vercel.app',
          },
        ],
        destination: 'https://www.legendphysiotherapy.com/:path*',
        permanent: true,
      },
    ];
  },
} as NextConfig;

export default nextConfig;
