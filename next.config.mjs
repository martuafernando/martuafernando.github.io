import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "/martuafernando.github.io",
  images: {
    unoptimized: true,
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
