import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Instagramの写真の配信元。CDNのホスト名は配信先によって変わり、URLには署名クエリが
    // 付くため、ホスト名はワイルドカード、search は制限しない（既定の `**`）。
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
