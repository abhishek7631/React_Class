import { useEffect, useState } from "react";
import axios from "axios";

export default function Read() {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://66fb96308583ac93b40c4e65.mockapi.io/api/menu"
      );
      setState(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          border: "2px solid red",
          backgroundColor: "black",
          color: "white",
        }}
      >
        -: Menu :-
      </h1>
      {state.map((items) => {
        return (
          <div
            key={items.id}
            style={{
              width: "600px",
              borderRadius: "10px",
              margin: "auto",
              backgroundColor: "green",
              color: "yellow",
              marginBottom: "10px",
              padding: "5px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Fruits: {items.name}</h1>
            <h3 style={{ textAlign: "center" }}>Drinks: {items.drinks}</h3>
          </div>
        );
      })}
    </div>
  );
}
