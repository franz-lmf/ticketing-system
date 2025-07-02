/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/ticket-listings',
  //       permanent: true
  //     }
  //   ]
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  // Note: Next.js does not natively support 'allowedDevOrigins'.
  // If you want to allow CORS or similar, you need to handle it in custom server or middleware.
  allowedDevOrigins: [
    'local-origin.dev',
    '*.local-origin.dev',
    '192.168.2.*',
    'localhost',
    '127.0.0.1',
    '192.168.2.194:3000' // Add your specific network address here
  ],
}

module.exports = nextConfig
