import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.static-src.com",
      },
      {
        protocol: "https",
        hostname: "data:image",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};
export default nextConfig;
