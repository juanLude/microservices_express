import React, { useState } from "react";
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

  // const updateComments = async () => {
  //   const fetchedComments = await fetchComments();
  //   if (fetchedComments) {
  //     setComments(fetchedComments);
  //     console.log(fetchedComments);
  //   }
  // };
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
