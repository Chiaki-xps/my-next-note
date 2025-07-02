import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            nextJS 中使用 MDX
          </h1>

          <div className="grid gap-4 md:grid-cols-1">
            <Link
              href="/mdx/local"
              className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                local - 本地mdx
              </h2>
              <p className="text-blue-600">演示本地mdx</p>
            </Link>

            <Link
              href="/mdx/remote"
              className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                remote - 远程mdx
              </h2>
              <p className="text-blue-600">演示远程mdx</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
