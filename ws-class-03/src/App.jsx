import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);

  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    console.log(result);
    setPosts(result);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        +
      </button>

      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              margin: "20px 0",
              padding: "10px",
              border: "1px solid #ccc",
              backgroundColor: "blue",
              boxShadow: "2px 6px 3px red",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
