import { useState } from "react";

const Card = ({ id, name, info, image, price, remove }) => {
  const [read, setRead] = useState(false);
  const des = read ? info : info.substring(0, 100) + "...";
  return (
    <section className="card">
      <img src={image} alt="images" />
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <div style={{ textAlign: "center", padding: "7px" }}>
          {des}{" "}
          {read ? (
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                setRead(false);
              }}
            >
              Read less
            </span>
          ) : (
            <span
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => {
                setRead(true);
              }}
            >
              Read More
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default Card;
