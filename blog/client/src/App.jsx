import React, { useEffect, useState } from "react";
import PostCreate from "./Components/PostCreate";
import PostList from "./Components/PostList";
import { fetchPosts } from "./Components/PostList";

function App() {
  const [posts, setPosts] = useState({});

  const updatePosts = async () => {
    const fetchedPosts = await fetchPosts();
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  };

  useEffect(() => {
    updatePosts();
  }, []);

  // comments
  console.log(posts);

  return (
    <div className="container">
      <h1>Create Post </h1>
      <PostCreate onPostCreated={updatePosts} />
      <hr />
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
