export default function PostList({
  posts,
  activePostId,
  setActivePostId,
  createPost,
  theme,
  setTheme,
  deletePost
}) {
  return (
    <div className="d-flex flex-column h-100 p-3 bg-body-tertiary">
      {/* THEME TOGGLE */}
      <button
        className={`btn btn-sm mb-2 ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* CREATE POST */}
      <button 
        className="btn btn-primary w-100 mb-3 shadow-sm"
        onClick={createPost}
      >
        + New Post
      </button>

      {/* POST ITEMS CONTAINER */}
      <div className="list-group list-group-flush flex-grow-1 overflow-auto pe-2">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActivePostId(post.id)}
            className={`list-group-item list-group-item-action border-0 rounded mb-2 shadow-sm p-3 ${
              post.id === activePostId ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="text-truncate me-2">
                <strong className="d-block text-truncate" style={{ maxWidth: "150px" }}>
                  {post.title}
                </strong>
                <small className={post.id === activePostId ? "text-light" : "text-muted"}>
                  {new Date(post.updatedAt).toLocaleDateString()}
                </small>
              </div>
              
              <button
                className={`btn btn-link btn-sm p-0 border-0 ${
                  post.id === activePostId ? "text-light" : "text-danger"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  deletePost(post.id);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MARKDOWN CHEAT SHEET (Pinned at bottom) */}
      <div className="mt-3 pt-3 border-top">
        <h6 className="small fw-bold text-uppercase opacity-75">Markdown Guide</h6>
        <div className="row g-1 small opacity-75">
          <div className="col-6"><code># H1</code></div>
          <div className="col-6"><code>**B**</code></div>
          <div className="col-6"><code>## H2</code></div>
          <div className="col-6"><code>*I*</code></div>
          <div className="col-6"><code>- List</code></div>
          <div className="col-6"><code>`Code`</code></div>
        </div>
      </div>
    </div>
  );
}