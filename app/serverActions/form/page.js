import Link from "next/link";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Form API 演示
          </h1>

          <div className="grid gap-4 md:grid-cols-1">
            <Link
              href="/serverActions/form/useFormStatus"
              className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                useFormStatus - 使用useFormStatus
              </h2>
              <p className="text-blue-600">
                包含 useFormStatus 和 useFormState 的使用方法
              </p>
            </Link>

            <Link
              href="/serverActions/form/useFormState"
              className="block p-6 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                useFormState - 使用useFormState
              </h2>
              <p className="text-green-600"></p>
            </Link>

            <Link
              href="/serverActions/form/useOptimistic"
              className="block p-6 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-purple-800 mb-2">
                useOptimistic - 使用useOptimistic
              </h2>
              <p className="text-purple-600"></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
