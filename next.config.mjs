import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置日志
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    // 配置图源
    domains: ["picsum.photos", "cdn2.thecatapi.com"], // 添加允许的图片域名
  },
  // 配置 `pageExtension` 以包含 MDX 文件
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDXConfig = withMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDXConfig(nextConfig);
