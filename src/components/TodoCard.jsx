import React from "react";
import TodoList from "./TodoList";

export default function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button
            onClick={() => {
              handleEditTodos(index);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodos(index);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
