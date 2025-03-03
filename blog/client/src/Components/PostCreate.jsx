import React, { useState } from "react";

function PostCreate({ onPostCreated }) {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://posts.com/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        onPostCreated();
        console.log(jsonResponse);
      }
    } catch (error) {
      console.log(error);
    }

    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
