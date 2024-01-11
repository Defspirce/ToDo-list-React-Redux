import React, { useRef, useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  let [id, setId] = useState(0);
  const [editableItemId, setEditableItemId] = useState(null);

  const inputRef = useRef();

  const buttonHandler = (e) => {
    e.preventDefault();
    setId(id + 1);
    const value = inputRef.current.value;
    setTodoList([...todoList, { value: value, id: id }]);
    inputRef.current.value = "";
  };

  const toggleEdit = (id) => {
    setEditableItemId(id === editableItemId ? null : id);
  };

  const handleEdit = (id, newValue) => {
    const updatedList = todoList.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setTodoList(updatedList);
    setEditableItemId(null);
  };

  return (
    <div>
      <form className="form__elem">
        <input type="text" placeholder="Enter your task" ref={inputRef} />
        <button type="submit" onClick={buttonHandler}>
          Push
        </button>
      </form>
      <ul className="list">
        {todoList.map((elem) => (
          <li className="item__list" key={elem.id}>
            {editableItemId === elem.id ? (
              <input
                type="text"
                defaultValue={elem.value}
                onBlur={(e) => handleEdit(elem.id, e.target.value)}
              />
            ) : (
              <>
                <input type="checkbox" style={{ marginRight: 10 }} />
                {elem.value}
                <button
                  style={{ float: "right", marginLeft: 10 }}
                  onClick={() => toggleEdit(elem.id)}
                >
                  Edit
                </button>
                <button
                  style={{ float: "right" }}
                  onClick={() =>
                    setTodoList(todoList.filter((e) => e.id !== elem.id))
                  }
                >
                  X
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
