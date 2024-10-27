/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "production" ? "/blog-pembatik-2024" : undefined,
    images: {
        unoptimized: true,
    },
};

module.exports = withContentlayer({ ...nextConfig });
