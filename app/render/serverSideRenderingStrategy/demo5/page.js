import Image from "next/image";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const url = (
    await (
      await fetch("https://api.thecatapi.com/v1/images/search", {
        cache: "no-store",
      })
    ).json()
  )[0].url;
  return (
    <>
      <p>
        使用 fetch 的时候，设置 `cache:
        &quot;no-store&quot;`，可以禁用缓存，所以每次刷新页面都是新的
      </p>
      <Image src={url} width={300} height={300} alt="cat" />
      {new Date().toLocaleTimeString()}
      {JSON.stringify(params)}
    </>
  );
}
