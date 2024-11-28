import React, { useState } from "react";

function CommentCreate({ postId, refreshComments }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4001/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, content }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        // onCommentCreated(jsonResponse);
        console.log(jsonResponse);

        refreshComments(postId);
        // if (refreshComments) {
        //   console.log("refreshComments");
        //   refreshComments(postId);
        // }
      }
    } catch (error) {
      console.log(error);
    }

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
