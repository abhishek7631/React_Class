import { useState } from "react";
import data from "./Data";
import Tours from "./Tours";

function App() {
  const [state, setstate] = useState(data);

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  }

  const remove = (id) => {
    const filtered = state.filter((items) => items.id !== id);
    setstate(filtered);
  };

  return (
    <div>
      <Tours state={state} remove={remove}></Tours>
    </div>
  );
}

export default App;
