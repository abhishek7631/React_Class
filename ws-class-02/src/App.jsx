import "./App.css";
import employe from "./Data";

function App() {
  return (
    <div>
      <h1>Our Best Employes 2024</h1>
      <section>
        <Card
          name={employe[0].name}
          image={employe[0].img}
          position={employe[0].position}
        ></Card>
      </section>
    </div>
  );
}

function Card({ name, image, position }) {
  return (
    <div>
      <img src={image} alt="image" />
      <h2>{name}</h2>
      <h3>{position}</h3>
    </div>
  );
}

export default App;
