import { useState } from "react";
import "./App.css";
import img1 from "./assets/lightOn.jpg";
import img2 from "./assets/lightOff.png";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h2>LIGHT ON/OFF</h2>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Light On
      </button>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Light Off
      </button>

      {show ? <On /> : <Off />}
    </div>
  );
}

export default App;

function On() {
  return (
    <div>
      <img src={img1} alt="on" className="img1" />
    </div>
  );
}
function Off() {
  return (
    <div>
      <img src={img2} alt="off" className="img2" />
    </div>
  );
}

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
