import { exportToHTML } from "../utils/exportHtml";
import { exportToPDF } from "../utils/exportPdf";
import { getTextStats } from "../utils/textStats";

export default function EditorToolbar({ post }) {
    const { words, characters } = getTextStats(post.content);
  return (
    <div className="toolbar">
      <button onClick={() => exportToHTML(post.title, post.content)}>
        Export HTML
      </button>

      <button onClick={() => exportToPDF(post.title, post.content)}>
        Export PDF
      </button>
       <div style={{ marginLeft: "auto", fontSize: "14px", opacity: 0.8 }}>
        {words} words · {characters} characters
      </div>
    </div>
  );
}
