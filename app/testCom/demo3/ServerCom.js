import dayjs from "dayjs";

export default async function ServerCom() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(1000);
  return (
    <div>
      ServerCom
      {dayjs().format("YYYY-MM-DD HH:mm:ss")}
    </div>
  );
}
