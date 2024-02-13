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
            },
            {
                hostname: 'lh3.googleusercontent.com'
            },
            {
                hostname: 'cdn-images.farfetch-contents.com'
            },
            {
                hostname: 'gfx.productsup.io'
            },
            {
                hostname: 'www.theoutnet.com'
            }
        ],
    },
}

module.exports = nextConfig
