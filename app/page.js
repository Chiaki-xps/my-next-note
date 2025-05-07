"use client";
import React from "react";
import Link from "next/link";

export default function Page() {
  const [error, setError] = React.useState(false);

  const handleGetError = () => {
    setError(true);
  };

  return (
    <>
      <Link href="/dashboard">dashboard</Link>
      <h1>这个页面，最后会作为同层的layout的参数传入!(前提没有template.js)</h1>

      <>
        {error ? Error() : <button onClick={handleGetError}>Get Error</button>}
      </>
    </>
  );
}
