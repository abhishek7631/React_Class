import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function App() {
  return <BasicExample></BasicExample>;
}

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// import { useState } from "react";
// import "./App.css";
// import img1 from "./assets/lightOn.jpg";
// import img2 from "./assets/lightOff.png";

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="App">
//       <h2>LIGHT ON/OFF</h2>
//       <button
//         onClick={() => {
//           setShow(false);
//         }}
//       >
//         Light On
//       </button>
//       <button
//         onClick={() => {
//           setShow(true);
//         }}
//       >
//         Light Off
//       </button>

//       {show ? <On /> : <Off />}
//     </div>
//   );
// }

// export default App;

// function On() {
//   return (
//     <div>
//       <img src={img1} alt="on" className="img1" />
//     </div>
//   );
// }
// function Off() {
//   return (
//     <div>
//       <img src={img2} alt="off" className="img2" />
//     </div>
//   );
// }

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="main">
//       <h4>Choose one Person</h4>

//       <button
//         onClick={() => {
//           setShow(true);
//         }}
//       >
//         Abhishek
//       </button>
//       <button
//         onClick={() => {
//           setShow(false);
//         }}
//       >
//         Chandan
//       </button>

//       {show ? <Abhishek></Abhishek> : <Chandan></Chandan>}
//     </div>
//   );
// }

// export default App;

// function Abhishek() {
//   return <p>I'm Abhishek.</p>;
// }

// function Chandan() {
//   return <p>I'm Chandan.</p>;
// }
