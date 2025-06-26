import Image from "next/image";

export default async function Page() {
  const url = (
    await (await fetch("https://api.thecatapi.com/v1/images/search")).json()
  )[0].url;

  return (
    <>
      <p>
        执行npm run
        dev，每次刷新页面，都会重新请求接口，所以每次展示的都是不同的图片
      </p>
      <Image src={url} width={300} height={300} alt="cat" />
      <p>
        执行npm run build，然后执行npm run start，每次刷新页面，都是原来的图片
      </p>
    </>
  );
}
