import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CacheLayout({ children }) {
  return (
    <section className="p-5">
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <Link href="/caching/demo5/about">About</Link>
        <Link href="/caching/demo5/settings">Settings</Link>
      </nav>
      {children}
    </section>
  );
}
