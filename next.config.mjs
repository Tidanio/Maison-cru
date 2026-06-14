/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep production builds resilient; lint is run separately via `npm run lint`.
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Editorial placeholder photography. Swap these hosts for your real CDN/DAM.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
