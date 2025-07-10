import Link from "next/link";

export default function TestCom() {
  return (
    <>
      <Link key="demo1" href="/testCom/demo1">
        Demo1
      </Link>
      <Link key="demo2" href="/testCom/demo2">
        Demo2
      </Link>
      <Link key="demo3" href="/testCom/demo3">
        Demo3
      </Link>
    </>
  );
}
