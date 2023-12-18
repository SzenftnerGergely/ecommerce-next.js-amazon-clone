/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "unsplash.com"}, 
            {hostname: "images.unsplash.com"},
            {hostname: "lh3.googleusercontent.com"},
            {hostname: "plus.unsplash.com"}
        ]
    }
}

module.exports = nextConfig
