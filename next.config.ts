import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/tools",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
