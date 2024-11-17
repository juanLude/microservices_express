/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch(
      `http://localhost:4001/posts/${postId}/comments`
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setComments(jsonResponse);
    } else {
      throw new Error("Failed to fetch comments");
    }
  };
  useEffect(() => {
    fetchComments();
  }, [postId]);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
}

export default CommentList;
