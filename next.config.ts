import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/job-portal",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
