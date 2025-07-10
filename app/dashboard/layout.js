"use client";

import { useState } from "react";
import Link from "next/link";

export default function Layout({ children }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Link key="about" href="/dashboard/about">
          About
        </Link>
        <br />
        <Link key="settings" href="/dashboard/settings">
          Settings
        </Link>
        <br />
        <Link key="noFound" href="/dashboard/noFound">
          noFound
        </Link>
      </div>

      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {children}
    </>
  );
}
