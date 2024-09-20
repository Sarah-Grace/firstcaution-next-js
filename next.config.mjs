/** @type {import('next').NextConfig} */
const nextConfig = {
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
