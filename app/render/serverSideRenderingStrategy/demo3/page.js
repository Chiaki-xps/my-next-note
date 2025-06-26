import { cookies } from "next/headers";
import Image from "next/image";

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  const url = (
    await (await fetch("https://api.thecatapi.com/v1/images/search")).json()
  )[0].url;

  return (
    <>
      <p>
        因为使用了 动态函数，所以打包的时候，会把这个路由标记为
        动态的，所以每次刷新页面都是新的。
      </p>
      <br />
      <p>使用 cookies 的时候，fetch会退出缓存，所以每次刷新页面都是新的</p>
      <Image src={url} width={300} height={300} alt="cat" />
    </>
  );
}
