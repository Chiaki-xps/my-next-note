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
};

export default nextConfig;
