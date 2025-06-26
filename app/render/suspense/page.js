import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-2xl font-bold mb-6">导航页面</h1>
      <Link
        href="/render/suspense/demo1"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        跳转到 Demo1
      </Link>
      <Link
        href="/render/suspense/demo2"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        跳转到 Demo2
      </Link>
    </div>
  );
}
