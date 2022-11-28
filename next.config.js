module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/login',
          permanent: true,
        },
      ]
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
        },
      ]
    },
  }