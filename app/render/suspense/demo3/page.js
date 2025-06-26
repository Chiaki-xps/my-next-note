import { Suspense } from "react";

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

export default function Dashboard() {
  return (
    <section style={{ padding: "20px" }}>
      <Suspense fallback={<p>Loading PostFeed Component</p>}>
        <PostFeed />
        {/* 会等所有组件加载完成才渲染 */}
        {/* Weather 因为 8s, 而 Recommend 因为 5s，而 Suspense 会等所有组件加载完成才渲染，所以要等8s，导致出现效果是一起渲染 */}
        <Suspense fallback={<p>Loading Weather Component</p>}>
          <Weather />
          <Suspense fallback={<p>Loading Recommend Component</p>}>
            <Recommend />
          </Suspense>
        </Suspense>
      </Suspense>

      <div>--------------------------------</div>

      <div>
        <Suspense fallback={<p>Loading PostFeed Component</p>}>
          <PostFeed />
          {/* 和上面相反，会先渲染 Recommend，然后等 Weather 加载完成才渲染 */}
          {/* 对于第二个Suspense，里面涉及的组件是 Recommend、Suspense。所以只需要等待 Recommend 加载完成,就会渲染*/}
          <Suspense fallback={<p>Loading Weather Component</p>}>
            <Recommend />
            <Suspense fallback={<p>Loading Recommend Component</p>}>
              <Weather />
            </Suspense>
          </Suspense>
        </Suspense>
      </div>
    </section>
  );
}
