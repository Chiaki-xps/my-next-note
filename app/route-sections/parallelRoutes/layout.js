"use client";
import React from "react";

export default function Page({ children, a, b }) {
  return (
    <>
      {children}
      <div>layout.js接收到了: {a}</div>
      <div>layout.js接收到了: {b}</div>
    </>
  );
}
