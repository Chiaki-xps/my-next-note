import Link from "next/link";

export default function RootLayout({ children, team, analytics }) {
  return (
    <div>
      <div className="p-10 mb-6 bg-sky-600 text-white rounded-xl">
        Parallel Routes Examples
      </div>
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <Link href="/route-sections/demo">Home</Link>
        <Link href="/route-sections/demo/page-views">Page Views</Link>
        <Link href="/route-sections/demo/visitors">Visitors</Link>
      </nav>
      <div className="flex gap-6">
        team-{team}
        analytics-{analytics}
      </div>
      {children}
    </div>
  );
}
