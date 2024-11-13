import CommentCreate from "./CommentCreate";

export const fetchPosts = async () => {
  const response = await fetch("http://localhost:4000/posts");
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } else {
    throw new Error("Failed to fetch posts");
  }
};
function PostList({ posts }) {
  //   const [posts, setPosts] = useState({});

  //   useEffect(() => {
  //     fetchPosts().then(setPosts);
  //   }, []);

  console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
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
// change this
export default PostList;
