/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'bed-mate.s3.af-south-1.amazonaws.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
