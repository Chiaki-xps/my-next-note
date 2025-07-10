// 展示服务端导入客户端组件效果
import dayjs from "dayjs";

import ClientCom from "./ClientCom";

export default function Page() {
  return (
    <div>
      ServerCom
      {dayjs().format("YYYY-MM-DD HH:mm:ss")}
      <ClientCom />
    </div>
  );
}
