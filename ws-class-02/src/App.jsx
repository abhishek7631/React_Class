import "./App.css";
import employe from "./Data";

function App() {
  return (
    <div>
      <h1>Our Best Employes 2024</h1>
      <section className="card-container">
        <Card
          name={employe[0].name}
          image={employe[0].img}
          position={employe[0].position}
        ></Card>

        <Card
          name={employe[1].name}
          image={employe[1].img}
          position={employe[1].position}
        ></Card>

        <Card
          name={employe[2].name}
          image={employe[2].img}
          position={employe[2].position}
        ></Card>

        <Card
          name={employe[3].name}
          image={employe[3].img}
          position={employe[3].position}
        ></Card>

        <Card
          name={employe[4].name}
          image={employe[4].img}
          position={employe[4].position}
        ></Card>

        <Card
          name={employe[5].name}
          image={employe[5].img}
          position={employe[5].position}
        ></Card>

        <Card
          name={employe[6].name}
          image={employe[6].img}
          position={employe[6].position}
        ></Card>

        <Card
          name={employe[7].name}
          image={employe[7].img}
          position={employe[7].position}
        ></Card>
      </section>

      <footer style={{ height: "100px", backgroundColor: "black" }}>
        <p style={{ color: "white", textAlign: "center", padding: "40px" }}>
          &copy; 2024 Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Card({ name, image, position }) {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <h2>{name}</h2>
      <h3>{position}</h3>
    </div>
  );
}

export default App;
