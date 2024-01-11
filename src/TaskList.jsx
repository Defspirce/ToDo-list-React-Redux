import React, { useRef, useState } from "react";
import {
  addTask,
  removeTask,
  completeTask,
  editingTask,
} from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";

export default function TaskList() {
  const [id, setId] = useState(0);
  const inputRef = useRef();

  const tasks = useSelector((state) => state);

  const dispatch = useDispatch();

  const buttonHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    dispatch(addTask(id, value, false));
    setId(id + 1);
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };

  const debug = () => console.log(tasks);

  const isChecked = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <div>
      <form className="form__elem">
        <input type="text" placeholder="Enter your task" ref={inputRef} />
        <button type="submit" onClick={buttonHandler}>
          Push
        </button>
      </form>
      <ol>
        {tasks.map((elem) => (
          <li className="item__list" key={elem.id}>
            <input
              type="checkbox"
              onChange={() => isChecked(elem.id)}
              key={elem.id}
            />
            {elem.value}
            <button
              style={{ float: "right" }}
              onClick={() => deleteTask(elem.id)}
            >
              X
            </button>
          </li>
        ))}
      </ol>
      <button onClick={debug}>DEBUG</button>
    </div>
  );
}
