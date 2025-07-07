// 这是一个服务端组件
// 由于渲染在服务端，所以并不会造成bundle体积的增加
import dayjs from "dayjs";

export default function SidebarNoteItemHeader({ title, updateTime }) {
  return (
    <header className="sidebar-note-header">
      <strong>{title}</strong>
      <small>{dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}</small>
    </header>
  );
}
