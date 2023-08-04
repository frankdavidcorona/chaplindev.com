/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md"],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
