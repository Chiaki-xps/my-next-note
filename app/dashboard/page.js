"use client";
// dashboard/page.js

import React from "react";

export default function Page({ children }) {
  const [error, setError] = React.useState(false);

  const handleGetError = () => {
    setError(true);
  };

  return (
    <div>
      {error ? (
        Error()
      ) : (
        <button onClick={handleGetError}>dashboard/page/Get Error</button>
      )}
      {/* 这里的children会接受子路由的内容 */}
      {children}
    </div>
  );
}
