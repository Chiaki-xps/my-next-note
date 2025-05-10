import Image from "next/image";
import { photos } from "../../../data";

export default async function PhotoModal({ params }) {
  // 在未来的版本里，params 可能是异步的，所以官方建议写成async await 去解构
  const { id } = await params;

  const photo = photos.find((p) => p.id === id);
  return (
    <>
      <div>路由拦截</div>
      <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
        <Image
          className="w-52"
          width="520"
          height="520"
          src={photo.src}
          alt=""
          priority
        />
      </div>
    </>
  );
}
