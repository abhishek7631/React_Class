import { useState } from "react";
import data from "./Data";
import Tours from "./Tours";

function App() {
  const [state, setstate] = useState(data);

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Tours state={state}></Tours>
    </div>
  );
}

export default App;
