/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

export const fetchComments = async (postId) => {
  const response = await fetch(
    `http://localhost:4001/posts/${postId}/comments`
  );
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } else {
    throw new Error("Failed to fetch comments");
  }
};
function CommentList({ postId, onCommentsUpdate }) {
  const [comments, setComments] = useState([]);
  const fetchOnCommentsUpdate = async () => {
    try {
      const comments = await fetchComments(postId);
      setComments(comments);
      console.log(comments);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  console.log(comments);

  useEffect(() => {
    fetchOnCommentsUpdate();
  }, [postId, onCommentsUpdate]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
}

export default CommentList;
