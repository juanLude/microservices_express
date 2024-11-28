import React, { useEffect, useState } from "react";
import PostCreate from "./Components/PostCreate";
import PostList from "./Components/PostList";
import { fetchPosts } from "./Components/PostList";

function App() {
  const [posts, setPosts] = useState({});
  const [refreshSignal, setRefreshSignal] = useState(0);
  const handleNewComment = () => {
    console.log("handleNewComment");
    setRefreshSignal((prev) => prev + 1); // Increment to trigger refresh
  };

  const updatePosts = async () => {
    const fetchedPosts = await fetchPosts();
    if (fetchedPosts) {
      console.log(fetchedPosts);

      setPosts(fetchedPosts);
    }
  };

  useEffect(() => {
    updatePosts();
  }, []);
  console.log(posts);

  return (
    <div className="container">
      <h1>Create Post </h1>
      <PostCreate onPostCreated={updatePosts} />
      <hr />
      <h1>Posts</h1>
      <PostList
        posts={posts}
        onCommentsUpdate={refreshSignal}
        refreshComments={handleNewComment}
      />
    </div>
  );
}

export default App;
