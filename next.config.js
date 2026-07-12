/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/experience',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/#testimonials',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
