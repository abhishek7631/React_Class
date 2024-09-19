import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="main">
      <h4>Choose one Person</h4>

      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Abhishek
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Chandan
      </button>

      {show ? <Abhishek></Abhishek> : <Chandan></Chandan>}
    </div>
  );
}

export default App;

function Abhishek() {
  return <p>I'm Abhishek.</p>;
}

function Chandan() {
  return <p>I'm Chandan.</p>;
}
