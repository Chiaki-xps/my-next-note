import Image from "next/image";

async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <p>开发环境下，每次刷新页面，都会重新请求数据</p>
      <p>生产环境下，fetch 会缓存数据，不会重新请求数据</p>
      <Image src={data[0].url} width={300} height={300} alt="cat" />
    </>
  );
}
