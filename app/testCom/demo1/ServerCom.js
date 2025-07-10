import dayjs from "dayjs";

import ClientCom from "./ClientCom";

export default function ServerCom() {
  return (
    <div>
      ServerCom
      {dayjs().format("YYYY-MM-DD HH:mm:ss")}
      <ClientCom />
    </div>
  );
}
