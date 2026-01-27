import ReactMarkdown from "react-markdown";

export default function Preview({ markdown }) {
  return (
    <div className="preview-container h-100 border-start ps-4">
      <h6 className="text-uppercase text-muted fw-bold small mb-3 mt-1" style={{ letterSpacing: "1px" }}>
        Live Preview
      </h6>
      <div className="markdown-body pb-5">
        {markdown ? (
          <ReactMarkdown>{markdown}</ReactMarkdown>
        ) : (
          <p className="text-muted fst-italic">Nothing to preview yet...</p>
        )}
      </div>
    </div>
  );
}