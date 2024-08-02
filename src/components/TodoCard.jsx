import React, { useState } from "react";

function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  const [checkbox, setCheckbox] = useState(false);

  function handleClickCheckbox() {
    setCheckbox(!checkbox);
  }

  return (
    <div>
      <li className="todoItem">
        <input
          type="checkbox"
          onClick={() => {
            handleClickCheckbox();
          }}
        ></input>
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

export default TodoCard;
