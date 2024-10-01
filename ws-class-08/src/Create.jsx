import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [drinks, setDrinks] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    axios.post("https://66fb96308583ac93b40c4e65.mockapi.io/api/menu", {
      name: name,
      drinks: drinks,
    });
    console.log(name, drinks);
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="drink"
          onChange={(e) => {
            setDrinks(e.target.value);
          }}
        />

        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
}
