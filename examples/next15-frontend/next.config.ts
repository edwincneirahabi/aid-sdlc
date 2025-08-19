import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // SSG export for S3 + CloudFront
  images: {
    unoptimized: true, // needed for static export
  },
};

export default nextConfig;
