import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { persistData, getData } from "../utils/localStorage";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodos = (newTodo) => {
    let id = uuid();
    const newTodoList = [...todos, { id: id, task: newTodo, completed: false }];
    persistData("todos", { todos: newTodoList });
    setTodos(newTodoList);
  };

  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todo.id !== index;
    });
    persistData("todos", { todos: newTodoList });
    setTodos(newTodoList);
  };

  const handleEditTodos = (index) => {
    const valueToBeEdited = todos.filter((todo) => {
      return todo.id === index;
    })[0].task;

    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  };

  const handleClickCheckbox = (index) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    persistData("todos", { todos: updatedTodos });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    let localTodos = getData("todos");
    if (localTodos) {
      setTodos(localTodos.todos);
    }
  }, []);

  return {
    todos,
    todoValue,
    setTodoValue,
    handleAddTodos,
    handleClickCheckbox,
    handleDeleteTodos,
    handleEditTodos,
  };
}

export default useTodos;
