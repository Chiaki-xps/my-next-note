"use client";
// import "./globals.css";
import { useRouter } from "next/navigation";

export default function RootLayout(props) {
  // console.log("🚀 ~ RootLayout ~ props:", props);
  const { children } = props;
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        {/* <h1>children 表示子布局（如果有的话）或者子页面。</h1> */}
        {/* {router.pathname === "/" ? <div>App-layout</div> : null} */}
        {children}
      </body>
    </html>
  );
}
