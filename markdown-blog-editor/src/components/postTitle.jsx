export default function PostTitle({ title, onChange }) {
  return (
    <input
      className="post-title-input"
      value={title}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Untitled Post"
    />
  );
}
