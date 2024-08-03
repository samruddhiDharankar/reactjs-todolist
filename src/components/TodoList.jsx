import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  if (!todos) {
    return null;
  }
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} todo={todo}>
            <p>{todo.task}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
