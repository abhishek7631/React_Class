import { useEffect, useState } from "react";
import axios from "axios";

export default function Read() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://66fb96308583ac93b40c4e65.mockapi.io/api/menu"
      );
      setState(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      {state.map((items) => {
        return (
          <div key={items.id}>
            <h1>{items.name}</h1>
            <h4>{items.name}</h4>
          </div>
        );
      })}
    </div>
  );
}
