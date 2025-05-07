"use client";
// app/global-error.js
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>global-error wrong!</h2>
        <p>
          global-error.js
          除了能捕获根布局的错误，还能捕获子布局的错误。（捕获优先级是error优先过global，global更多的是兜底作用，没有捕获的，最终冒泡到顶层被处理）
        </p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
