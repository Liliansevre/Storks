module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/login',
          permanent: true,
        },
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
        },
      ]
    },
  }