import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
  images: {
    domains: ["image.tmdb.org", "m.media-amazon.com", "images.unsplash.com"], // Allow movie poster images
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; style-src 'self' 'unsafe-inline'; media-src 'self' https://website-static.plex.tv; img-src 'self' image.tmdb.org m.media-amazon.com; script-src 'self' 'unsafe-inline' 'unsafe-eval';",
          },
        ],
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb", // Set a body size limit
      allowedOrigins: ["*"], // Allow all origins
    }, // Enable server-side actions (if needed)
  },
};

export default nextConfig;
