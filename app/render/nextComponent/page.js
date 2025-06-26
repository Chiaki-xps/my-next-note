import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/render/nextComponent/serverComponent">服务器组件</Link>
      <Link href="/render/nextComponent/clientComponent">客户端组件</Link>
      <Link href="/render/nextComponent/demo/server">服务端组件</Link>
      <Link href="/render/nextComponent/demo/client">客户端组件</Link>
    </>
  );
}
