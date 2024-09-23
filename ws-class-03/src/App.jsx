import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [state, setstate] = useState(1);

  useEffect(() => {
    console.log("hello");
  });

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((item) => {
        return item.json;
      })
      .then((res) => {
        console.log(res);
      });
  }

  getData();

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
    </>
  );
}

export default App;
