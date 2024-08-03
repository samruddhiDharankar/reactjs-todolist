import React, { useEffect } from "react";
import { persistData, getData } from "../utils/localStorage";

function TodoCard(props) {
  const {
    children,
    handleDeleteTodos,

    handleEditTodos,
    handleClickCheckbox,
    todo,
  } = props;

  useEffect(() => {
    let newData = getData("checkbox");
    if (newData) {
      setCheckbox(newData);
    }
  }, []);

  return (
    <div>
      <li
        className="todoItem"
        style={{ background: todo.completed ? "lightgreen" : "white" }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            handleClickCheckbox(todo.id);
          }}
        ></input>
        {children}
        <div className="actionsContainer">
          <button
            onClick={() => {
              handleEditTodos(todo.id);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodos(todo.id);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoCard;
