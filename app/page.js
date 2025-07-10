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

      <div>
        {error ? (
          <div key="error">Error occurred!</div>
        ) : (
          <button key="button" onClick={handleGetError}>
            Get Error
          </button>
        )}
      </div>

      <Link key="dashboard" href="/dashboard">
        dashboard
      </Link>
      <Link key="history" href="/history">
        history
      </Link>
      <Link key="testCom" href="/testCom">
        testCom
      </Link>
    </>
  );
}
