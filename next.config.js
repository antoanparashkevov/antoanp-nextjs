/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  }
}

module.exports = nextConfig
