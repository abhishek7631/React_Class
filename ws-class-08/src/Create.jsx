import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [drinks, setDrinks] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    if (name && drinks) {
      try {
        await axios.post(
          "https://66fb96308583ac93b40c4e65.mockapi.io/api/menu",
          {
            name: name,
            drinks: drinks,
          }
        );
        alert("Item added successfully!");
        setName(""); // Reset the form fields after successful submission
        setDrinks("");
      } catch (error) {
        console.error("Error adding item:", error);
      }
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        width: "400px",
        margin: "auto",
        marginTop: "70px",
        padding: "10px",
      }}
    >
      <form onSubmit={sendData}>
        <label htmlFor="name">Enter Name: </label>
        <input
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="drinks">Enter Drinks: </label>
        <input
          type="text"
          id="drinks"
          placeholder="drinks"
          value={drinks}
          onChange={(e) => setDrinks(e.target.value)}
        />
        <br /> <br />
        <input style={{ marginLeft: "100px" }} type="submit" value="Add" />
      </form>
    </div>
  );
}
