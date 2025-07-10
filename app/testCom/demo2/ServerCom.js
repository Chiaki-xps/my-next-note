import dayjs from "dayjs";

import ClientCom from "./ClientCom";

export default async function ServerCom() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(1000);

  return (
    <div>
      ServerCom
      {dayjs().format("YYYY-MM-DD HH:mm:ss")}
      <ClientCom />
    </div>
  );
}
