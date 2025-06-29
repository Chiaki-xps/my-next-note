import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            优化策略演示
          </h1>

          <div className="grid gap-4 md:grid-cols-1">
            <Link
              href="/optimization/demo1"
              className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                demo1 - 演示 dynamic 组件 组件
              </h2>
              <p className="text-blue-600"></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
