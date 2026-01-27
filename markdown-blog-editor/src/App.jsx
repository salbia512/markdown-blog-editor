import { useEffect, useRef, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import PostList from "./components/PostList";
import PostTitle from "./components/postTitle";
import "./index.css";
import EditorToolbar from "./components/EditorToolbar";


const STORAGE_KEY = "markdown-posts";

export default function App() {
/* -------- INITIALIZE STATE DIRECTLY (REPLACES FIRST USEEFFECT) -------- */
const [posts, setPosts] = useState(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  // Return initial post if nothing is in LocalStorage
  return [{
    id: crypto.randomUUID(),
    title: "Untitled Post",
    content: "",
    updatedAt: Date.now(),
  }];
});

const [activePostId, setActivePostId] = useState(() => posts[0]?.id || null);

/* -------- SAVE TO LOCALSTORAGE -------- */
// Now this is safe because 'posts' is never accidentally empty on load
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}, [posts]);

  const activePost = posts.find((p) => p.id === activePostId);

  const createPost = () => {
    const newPost = {
      id: crypto.randomUUID(),
      title: "Untitled Post",
      content: "",
      updatedAt: Date.now(),
    };

    setPosts((prev) => [newPost, ...prev]);
    setActivePostId(newPost.id);
  };

  const updatePostContent = (content) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === activePostId
          ? { ...post, content, updatedAt: Date.now() }
          : post
      )
    );
  };
  const deletePost = (id) => {
  setPosts((prev) => {
    const updated = prev.filter((post) => post.id !== id);

    // If deleting active post
    if (id === activePostId) {
      setActivePostId(updated[0]?.id || null);
    }

    return updated.length ? updated : [{
      id: crypto.randomUUID(),
      title: "Untitled Post",
      content: "",
      updatedAt: Date.now()
    }];
  });
};

const updatePostTitle = (title) => {
  setPosts((prev) =>
    prev.map((post) =>
      post.id === activePostId
        ? { ...post, title, updatedAt: Date.now() }
        : post
    )
  );
};


  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);


  return (
  <div className="container-fluid p-0 app-container">
    <div className="row g-0 h-100">
      
      {/* Sidebar - Column 1 (3 units wide on medium screens) */}
      <div className="col-md-3 col-lg-2 border-end h-100 overflow-auto">
        <PostList
          posts={posts}
          activePostId={activePostId}
          setActivePostId={setActivePostId}
          createPost={createPost}
          deletePost={deletePost}
          theme={theme}
          setTheme={setTheme}
        />
      </div>

      {/* Main Content - Column 2 (Remaining space) */}
      <div className="col-md-9 col-lg-10 h-100 d-flex flex-column">
        {activePost ? (
          <>
            <EditorToolbar post={activePost} />
            <div className="row g-0 flex-grow-1 overflow-hidden">
              
              {/* Editor Side */}
              <div className="col-6 border-end h-100 p-3 overflow-auto">
                <PostTitle title={activePost.title} onChange={updatePostTitle} />
                <Editor markdown={activePost.content} setMarkdown={updatePostContent} />
              </div>

              {/* Preview Side */}
              <div className="col-6 h-100 p-3 overflow-auto">
                <Preview markdown={activePost.content} />
              </div>

            </div>
          </>
        ) : (
          <div className="d-flex h-100 align-items-center justify-content-center">
            <p className="text-muted">Select or create a post to start editing</p>
          </div>
        )}
      </div>

    </div>
  </div>
);
}
