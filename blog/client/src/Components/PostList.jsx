import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export const fetchPosts = async () => {
  const response = await fetch("http://localhost:4002/posts");
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } else {
    throw new Error("Failed to fetch posts");
  }
};

function PostList({ posts }) {
  const [refreshSignal, setRefreshSignal] = useState(0);
  const handleNewComment = () => {
    setRefreshSignal((prev) => prev + 1); // Increment to trigger refresh
  };

  console.log(posts);
  // useEffect(() => {
  //   fetchComments();
  // }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    console.log(post.comments);
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList
            comments={post.comments}
            onCommentsUpdate={refreshSignal}
            key={post.id}
          />
          <CommentCreate postId={post.id} refreshComments={handleNewComment} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between text-center">
      {renderedPosts}
    </div>
  );
}

export default PostList;
