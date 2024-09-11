import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample task"]);
  return (
    <div>
      <h4>Todo App</h4>
      <hr></hr>
      <br></br>
      <input placeholder="add a task"></input>
      <br></br>
      <br></br>
      <button>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
