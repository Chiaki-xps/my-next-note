import { Suspense } from "react";
import Link from "next/link";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function PostFeed() {
  await sleep(2000);
  return <h1>Hello PostFeed</h1>;
}

async function Weather() {
  await sleep(8000);
  return <h1>Hello Weather</h1>;
}

async function Recommend() {
  await sleep(5000);
  return <h1>Hello Recommend</h1>;
}

export default function Demo1() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Demo1 页面</h1>
      <Link
        href="/render/suspense"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        返回
      </Link>
      <section style={{ padding: "20px" }}>
        <div>
          <h1>按照顺序逐个显示出来</h1>
        </div>

        <Suspense fallback={<p>Loading PostFeed Component</p>}>
          <PostFeed />
        </Suspense>
        <Suspense fallback={<p>Loading Weather Component</p>}>
          <Weather />
        </Suspense>
        <Suspense fallback={<p>Loading Recommend Component</p>}>
          <Recommend />
        </Suspense>

        <Suspense
          fallback={
            <p>
              可以发现PostFee加载完成，但是这个还没有完全显示，直到 Weather
              也才能完全显示，意味着Suspense的fallback是会等待所有子组件都加载完成
            </p>
          }
        >
          <PostFeed />
          <Weather />
        </Suspense>
      </section>
    </div>
  );
}
