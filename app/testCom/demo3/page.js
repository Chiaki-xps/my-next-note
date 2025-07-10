// 客户端组件通过children导入服务端组件
import ServerCom from "./ServerCom";
import ClientCom from "./ClientCom";

export default function Page() {
  return (
    <div>
      <ClientCom>
        <ServerCom />
      </ClientCom>
    </div>
  );
}
