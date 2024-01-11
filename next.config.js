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
            },
            {
                hostname: 'flagcdn.com'
            },
            {
                hostname: 'www.mrporter.com'
            }
        ],
    },
}

module.exports = nextConfig
