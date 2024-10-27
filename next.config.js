const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_URL : "/",
    images: {
        unoptimized: true,
    },
};

module.exports = withContentlayer({ ...nextConfig });
