import Image from "next/image";
import { photos } from "../../data";

export default async function PhotoPage({ params }) {
  // 在未来的版本里，params 可能是异步的，所以官方建议写成async await 去解构
  const { id } = await params;

  const photo = photos.find((p) => p.id === id);
  return (
    <>
      <div>没有路由拦截</div>
      <Image
        className="block w-1/4 mx-auto mt-10"
        width="520"
        height="520"
        src={photo.src}
        alt=""
        priority
      />
    </>
  );
}
