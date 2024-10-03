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
    setName("");
    setDrinks("");
  };

  return (
    <div
      style={{
        border: "2px solid black",
        width: "400px",
        margin: "100px auto",
        padding: "10px",
      }}
    >
      <form onSubmit={sendData}>
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br> <br></br>
        <label htmlFor="">Enter Drinks: </label>
        <input
          type="text"
          placeholder="drink"
          onChange={(e) => {
            setDrinks(e.target.value);
          }}
        />
        <br></br> <br></br>
        <input style={{ marginLeft: "100px" }} type="submit" value={"Add"} />
      </form>
    </div>
  );
}
