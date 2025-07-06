"use client";
import { useRouter } from "next/navigation";

export default function Template({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" ? <div>App-Template</div> : null}
      <div>{children}</div>
    </>
  );
}
