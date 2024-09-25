import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      {/* <LudoBoard></LudoBoard> */}
      {/* <TodoList></TodoList> */}
      <Lottery n={4} winningSum={25}></Lottery>
    </>
  );
}

export default App;
