import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Server Actions 演示
          </h1>

          <div className="grid gap-4 md:grid-cols-1">
            <Link
              href="/serverActions/demo1"
              className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                demo1 - 传统调用接口方式
              </h2>
              <p className="text-blue-600">演示传统调用接口方式</p>
            </Link>

            <Link
              href="/serverActions/demo2"
              className="block p-6 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                demo2 - 使用 actions 方式
              </h2>
              <p className="text-green-600">演示使用 actions 方式</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
