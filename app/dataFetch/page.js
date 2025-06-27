import Link from "next/link";

export default function DataFetch() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-2xl font-bold mb-6">数据获取篇</h1>

      <Link
        href="/dataFetch/basicUsage"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Basic usage - 基本用法
      </Link>

      <Link
        href="/dataFetch/logging"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Logging - 日志
      </Link>

      <Link
        href="/dataFetch/serverComponent"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Server Component - 服务端组件
      </Link>
    </div>
  );
}
