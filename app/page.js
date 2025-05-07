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
      <h1>
        这个页面，最后会children参数 传入给temple.js
        之后temple.js作为参数传递给layout.js
      </h1>

      <>
        {error ? Error() : <button onClick={handleGetError}>Get Error</button>}
      </>

      <Link href="/dashboard">dashboard</Link>
      <Link href="/history">history</Link>
    </>
  );
}
