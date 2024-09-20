import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let upperCaseAll = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br></br>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Task ToDo</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>
                Uppercase One
              </button>
            </li>
          );
        })}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
