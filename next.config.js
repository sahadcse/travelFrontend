/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otithee.com",
        pathname: "/img/**",
      },
    ],
    domains: ["localhost"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
