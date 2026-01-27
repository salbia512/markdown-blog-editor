import { exportToHTML } from "../utils/exportHtml";
import { exportToPDF } from "../utils/exportPdf";
import { getTextStats } from "../utils/textStats";

export default function EditorToolbar({ post }) {
  const { words, characters } = getTextStats(post.content);

  return (
    <nav className="navbar navbar-expand-lg border-bottom px-3 bg-body shadow-sm">
      <div className="container-fluid p-0">
        <div className="d-flex gap-2">
          <button 
            className="btn btn-outline-secondary btn-sm"
            onClick={() => exportToHTML(post.title, post.content)}
          >
            <span className="d-none d-sm-inline">Export</span> HTML
          </button>

          <button 
            className="btn btn-outline-secondary btn-sm"
            onClick={() => exportToPDF(post.title, post.content)}
          >
            <span className="d-none d-sm-inline">Export</span> PDF
          </button>
        </div>

        {/* Text Statistics */}
        <div className="ms-auto text-muted small fw-medium">
          <span className="badge bg-secondary-subtle text-secondary border me-2">
            {words} words
          </span>
          <span className="badge bg-secondary-subtle text-secondary border d-none d-md-inline">
            {characters} characters
          </span>
        </div>
      </div>
    </nav>
  );
}