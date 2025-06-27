import Image from "next/image";

async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
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
