/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ticket-listings',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
