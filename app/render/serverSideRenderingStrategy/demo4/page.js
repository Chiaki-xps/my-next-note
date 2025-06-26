import Image from "next/image";

export default async function Page({ searchParams }) {
  const url = (
    await (await fetch("https://api.thecatapi.com/v1/images/search")).json()
  )[0].url;
  return (
    <>
      <p>
        因为使用了 searchParams，所以打包的时候，会把这个路由标记为
        动态的，所以每次刷新页面都是新的。但是 searchParams 并不会使 fetch
        退出缓存，所以打包后，fetch 请求会返回缓存的数据。
      </p>
      <Image src={url} width={300} height={300} alt="cat" />
      {new Date().toLocaleTimeString()}
      {JSON.stringify(searchParams)}
    </>
  );
}
