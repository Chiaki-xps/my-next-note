"use client";

// 当你使用了 useSearchParams 时，需要使用 Suspense 包裹客户端组件
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// 将包含 useSearchParams 的逻辑移到单独的客户端组件中
function SortButtons() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
    </>
  );
}

// 页面组件使用 Suspense 包裹客户端组件
export default function SortProducts() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SortButtons />
    </Suspense>
  );
}
