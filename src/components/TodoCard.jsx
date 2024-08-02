import React, { useEffect, useState } from "react";
import { persistData, getData } from "../utils/localStorage";

function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  const [checkbox, setCheckbox] = useState({});

  useEffect(() => {
    let newData = getData("checkbox");
    if (newData) {
      setCheckbox(newData);
    }
  }, []);

  function handleClickCheckbox(index) {
    console.log("check", checkbox); // Log the original checkbox object

    let newCheckbox = { ...checkbox, [index]: !checkbox[index] };
    console.log("newcheck", newCheckbox); // Log the updated checkbox object
    try {
      persistData("checkbox", newCheckbox);
      console.log("Data persisted successfully.");
    } catch (error) {
      console.error("Error persisting data:", error);
    }

    setCheckbox(newCheckbox);
  }

  return (
    <div>
      <li
        className="todoItem"
        style={{ background: checkbox[index] ? "lightgreen" : "white" }}
      >
        <input
          type="checkbox"
          checked={checkbox[index]}
          onClick={() => {
            handleClickCheckbox(index);
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
