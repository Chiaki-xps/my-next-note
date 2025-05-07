import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>根页面捕获 404</h2>
      <Link href="/">back</Link>
    </div>
  );
}
