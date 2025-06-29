"use client";
// app/page.js
import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentA = dynamic(() => import("./a.js"));
const ComponentB = dynamic(() => import("./b.js"));
const ComponentC = dynamic(() => import("./c.js"), { ssr: false });

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* 立刻加载，但会使用一个独立的客户端 bundle */}
      <ComponentA />

      {/* 按需加载 */}
      {showMore && (
        <>
          <ComponentB />
          <ComponentC />
        </>
      )}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>

      {/* 只在客户端加载 */}
      <ComponentC />

      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        直接请求demo1，页面是，因为
        A能够直接显示，能够看到A会预渲染到HTML里，由于B不会马上显示，所以没有，C由于设置了SSR:false，所以也不会渲染到其中，最终只有A会渲染到HTML里。
        <br />
        查看网络能够看到，
        C由于是动态加载，完成加载后，会渲染到HTML里。所以能看到网络中，A和C对应的js文件被下载
        <br />B 只在点击的时候，下载对厅的js文件
      </p>
    </div>
  );
}
