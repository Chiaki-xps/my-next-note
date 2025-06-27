import Image from "next/image";

// 强制 fetch 不缓存
export const fetchCache = "force-no-store";

async function getData() {
  const { signal } = new AbortController();
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    signal,
  });
  return res.json();
}
export async function generateMetadata() {
  const data = await getData();
  return {
    title: data[0].id,
  };
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <Image src={data[0].url} width={300} height={300} alt="cat" />
      <CatDetail />
    </>
  );
}

async function CatDetail() {
  const data = await getData();
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <Image src={data[0].url} width={300} height={300} alt="cat" />
    </>
  );
}
