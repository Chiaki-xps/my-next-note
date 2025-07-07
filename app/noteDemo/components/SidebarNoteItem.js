import SidebarNoteItemContent from "./SidebarNoteItemContent";
import SidebarNoteItemHeader from "./SidebarNoteItemHeader";

// noteId
// note {title: string, content: string, updateTime: string}
export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = "", updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}
