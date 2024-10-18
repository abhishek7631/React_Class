import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const change = (currentPage) => {
    console.log(currentPage);
    setPage(currentPage);
  };

  return (
    <div>
      {data.slice(0, 10).map((items) => {
        const { title, id } = items;
        return (
          <h4 key={id}>
            {id}.{title}
          </h4>
        );
      })}

      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            change(page - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            change(page + 1);
          }}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default App;
