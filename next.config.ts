import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // GitHub Pages 部署配置
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
