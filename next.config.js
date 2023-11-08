/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/data/**',
            },
            {
                hostname: 'images.pexels.com',
            },
            {
                hostname: 'fakestoreapi.com'
            }
        ],
    },
    experimental: {
        typedRoutes: true,
    },
}

module.exports = nextConfig
