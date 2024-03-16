/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    compress: false,
    reactStrictMode: true,//by default, it is true. This is a dev mode only feature for highlighting potential problems in an app
};

export default nextConfig;
