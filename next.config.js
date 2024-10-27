import { withContentlayer } from "next-contentlayer";

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "production" ? "/blog-pembatik-2024" : "/",
    images: {
        unoptimized: true,
    },
};

export default withContentlayer({ ...nextConfig });
