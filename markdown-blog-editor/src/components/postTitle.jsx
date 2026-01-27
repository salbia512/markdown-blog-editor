export default function PostTitle({ title, onChange }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control form-control-lg border-0 bg-transparent fw-bold p-0 shadow-none"
        value={title}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Untitled Post"
        style={{ fontSize: "1.75rem" }}
      />
    </div>
  );
}