import "./App.css";
import TaskList from "./TaskList";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <button onClick={() => setFlag(!flag)}>Change structure</button>
      {flag ? (
        <>
          <h2>TaskList(redux)</h2>
          <TaskList />
        </>
      ) : (
        <>
          <h2>TodoList(no redux)</h2>
          <TodoList />
        </>
      )}
    </div>
  );
}

export default App;
