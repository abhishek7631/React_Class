import Card from "./Card";

const Tours = ({ state, remove }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h1>Plan with Abhishek</h1>
      <div className="main">
        {state.map((items) => {
          return <Card key={items.id} {...items} remove={remove}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;
