// app/layout.js
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/caching/routerCache/a">Link to /a</Link>
          <br />
          <Link href="/caching/routerCache/b">Link to /b</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
