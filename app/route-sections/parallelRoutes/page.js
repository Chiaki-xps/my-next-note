"use client";
import React from "react";

export default function Page({ children, a, b }) {
  return (
    <>
      <div>parallelRoutes</div>
      {children}
      <div>page.js接受不到组件A: {a}</div>
      <div>page.js接受不到组件B: {b}</div>
    </>
  );
}
