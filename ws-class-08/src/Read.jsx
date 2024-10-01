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
      {state.map((items) => {
        return (
          <div key={items.id}>
            <h1>{items.name}</h1>
            <h4>{items.drinks}</h4>
          </div>
        );
      })}
    </div>
  );
}
