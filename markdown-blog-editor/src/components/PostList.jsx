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
    <div className="post-list" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* THEME TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* CREATE POST */}
      <button 
        onClick={createPost} 
        style={{ width: "100%", marginBottom: "20px" }}
      >
        + New Post
      </button>

      {/* POST ITEMS CONTAINER */}
      <div className="posts-container" style={{ flex: 1, overflowY: "auto" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={post.id === activePostId ? "active" : ""}
            onClick={() => setActivePostId(post.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              marginBottom: "8px",
              cursor: "pointer",
              borderRadius: "4px",
              position: "relative"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <strong style={{ fontSize: "0.9rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                {post.title}
              </strong>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletePost(post.id);
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "red",
                  cursor: "pointer",
                  padding: "0 5px",
                  fontWeight: "bold"
                }}
              >
                ✕
              </button>
            </div>

            <small style={{ opacity: 0.6, fontSize: "0.75rem", marginTop: "4px" }}>
              {new Date(post.updatedAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>

      {/* MARKDOWN CHEAT SHEET */}
      <div className="markdown-guide" style={{ 
        marginTop: "20px", 
        paddingTop: "15px", 
        borderTop: "1px solid var(--border)", 
        fontSize: "0.75rem" 
      }}>
        <p style={{ fontWeight: "bold", marginBottom: "8px", opacity: 0.8 }}>Markdown Guide</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", opacity: 0.7 }}>
          <span># H1</span>
          <span>**Bold**</span>
          <span>## H2</span>
          <span>*Italic*</span>
          <span>- List</span>
          <span>`Code`</span>
          <span>[Link]()</span>
          <span>{">"} Quote</span>
        </div>
      </div>
    </div>
  );
}