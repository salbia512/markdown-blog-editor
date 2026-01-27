import ReactMarkdown from "react-markdown";

export default function Preview({ markdown }) {
  return (
    <div className="preview">
      <h3>Live Preview</h3>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
