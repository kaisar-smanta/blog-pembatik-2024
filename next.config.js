const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: "export",
    reactStrictMode: true,
    basePath: "/blog-pembatik-2024",
    images: {
        unoptimized: true,
    },
};

module.exports = withContentlayer({ ...nextConfig });
