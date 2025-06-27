import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            缓存策略演示
          </h1>

          <div className="grid gap-4 md:grid-cols-1">
            <Link
              href="/caching/demo1"
              className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                demo1 - 默认缓存
              </h2>
              <p className="text-blue-600">演示Next.js的默认缓存行为</p>
            </Link>

            <Link
              href="/caching/demo2"
              className="block p-6 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                demo2 - 强制不缓存
              </h2>
              <p className="text-green-600">演示如何强制禁用缓存</p>
            </Link>

            <Link
              href="/caching/demo3"
              className="block p-6 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-orange-800 mb-2">
                demo3 - 强制不缓存，并使用 abortController 取消请求
              </h2>
              <p className="text-orange-600">演示如何取消正在进行的请求</p>
            </Link>
          </div>

          <p>
            三个Demo的区别。第一个Demo是默认缓存，所以无论刷新多少次，返回结果是一样的。
            <br />
            第二个Demo是强制不缓存，所以每次刷新都会重新请求数据。但是同一次组件渲染，会利用缓存，
            所以在一次渲染中，两个相同的请求，返回同一个数据
            <br />
            第三个Demo是强制不缓存，并使用 abortController
            取消请求，所以每次刷新都会重新请求数据。
          </p>
        </div>
      </div>
    </div>
  );
}
