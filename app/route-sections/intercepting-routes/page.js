import Link from "next/link";
import Image from "next/image";
import { photos } from "./data";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap">
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/route-sections/intercepting-routes/photo/${id}`}>
          <Image
            width="200"
            height="200"
            src={src}
            className="m-1"
            alt=""
            priority
          />
        </Link>
      ))}
    </div>
  );
}
