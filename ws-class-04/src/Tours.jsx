import Card from "./Card";

const Tours = ({ state }) => {
  return (
    <div>
      <h1>Plan with Abhishek</h1>
      {state.map((items) => {
        return <Card key={items.id} {...items}></Card>;
      })}
    </div>
  );
};

export default Tours;
