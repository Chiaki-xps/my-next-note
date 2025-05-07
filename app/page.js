import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/dashboard">dashboard</Link>
      <h1>这个页面，最后会作为同层的layout的参数传入!(前提没有template.js)</h1>
    </>
  );
}
