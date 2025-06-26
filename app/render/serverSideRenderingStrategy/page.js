import Link from "next/link";

export default function ServerSideRenderingStrategy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-2xl font-bold mb-6">服务端渲染策略</h1>

      <Link
        href="/render/serverSideRenderingStrategy/demo1"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Demo1 - 静态渲染
      </Link>

      <Link
        href="/render/serverSideRenderingStrategy/demo2"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Demo2 - 增量静态渲染ISR - 使用revalidate配置缓存时间
      </Link>

      <Link
        href="/render/serverSideRenderingStrategy/demo3"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Demo3 - 服务端组件 - 使用cookies
      </Link>

      <Link
        href="/render/serverSideRenderingStrategy/demo4"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Demo4 - 服务端组件 - 使用searchParams
      </Link>
    </div>
  );
}
