export default function Editor({ markdown, setMarkdown }) {
  return (
    <textarea
      className="editor"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Start writing..."
      autoFocus
    />
  );
}
