/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   return config; // No custom Webpack handling needed for CSS
  // },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true, // Set to false if it's a temporary redirect
      },
    ];
  },
};

export default nextConfig;
