// marked 的功能是将markdown文本转换为html文本
import { marked } from "marked";
// sanitize-html 的功能是 过滤html标签，防止XSS攻击
import sanitizeHtml from "sanitize-html";

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  "img",
  "h1",
  "h2",
  "h3",
]);
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ["alt", "src"],
  }
);

export default function NotePreview({ children }) {
  return (
    <div className="note-preview">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(children || ""), {
            allowedTags,
            allowedAttributes,
          }),
        }}
      />
    </div>
  );
}
