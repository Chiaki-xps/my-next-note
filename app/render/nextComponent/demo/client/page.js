"use client";

import { useState } from "react";
// 在命令行也会看到这个打印
// 在浏览器中也会看到这个打印
console.log("client");

export default function Page() {
  // 在命令行也会看到这个打印
  // 在浏览器中也会看到这个打印
  console.log("client Page");

  const [text, setText] = useState("init text");

  return (
    <button
      onClick={() => {
        setText("change text");
      }}
    >
      {text}
    </button>
  );
}
