export default function Editor({ markdown, setMarkdown }) {
  return (
    <div className="flex-grow-1 h-100">
      <textarea
        className="form-control border-0 bg-transparent shadow-none p-0 h-100"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Start writing your markdown here..."
        style={{ resize: "none", minHeight: "70vh" }}
      />
    </div>
  );
}