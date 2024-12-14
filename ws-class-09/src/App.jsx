import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
    if (currentPage >= 1 && currentPage !== page && currentPage <= 10)
      setPage(currentPage);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pagination</h1>

      <div className="main">
        {data.slice(page * 10 - 10, page * 10).map((items) => {
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
            className="btns"
            onClick={() => {
              change(page - 1);
            }}
          >
            Prev
          </button>

          {[...Array(data.length / 10)].map((_, i) => {
            return (
              <button
                className="pageBtn"
                style={{
                  background: i + 1 === page ? "black" : "",
                  color: i + 1 === page ? "white" : "",
                }}
                key={i}
                onClick={() => {
                  change(i + 1);
                }}
              >
                {i + 1}
              </button>
            );
          })}

          <button
            className="btns"
            onClick={() => {
              change(page + 1);
            }}
          >
            Next
          </button>
        </section>
      </div>
    </>
  );
}

export default App;

//extra code
//extra code
//extra code
