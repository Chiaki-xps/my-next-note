import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <Link href="/render/suspense/demo4/about">About</Link>
        <Link href="/render/suspense/demo4/settings">Settings</Link>
        <Link href="/render/suspense/demo4/team">Team</Link>
      </nav>
      {children}
    </section>
  );
}
