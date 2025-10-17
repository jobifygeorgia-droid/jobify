import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // allowedDevOrigins: [
  //   "http://localhost:3000",
  //   "http://127.0.0.1:3000",
  //   "http://127.0.0.1:8000",
  //   "http://localhost:8000",
  // ],
};

export default nextConfig;
