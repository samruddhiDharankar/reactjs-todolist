import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { persistData, getData } from "./utils/localStorage";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo) {
    let id = uuid();
    const newTodoList = [...todos, { id: id, task: newTodo, completed: false }];
    console.log(newTodoList);
    persistData("todos", { todos: newTodoList });
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData("todos", { todos: newTodoList });
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index].task;
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  function handleClickCheckbox(index) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    persistData("todos", { todos: updatedTodos });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    let localTodos = getData("todos");
    if (localTodos) {
      setTodos(localTodos.todos);
    }
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        handleClickCheckbox={handleClickCheckbox}
      />
    </>
  );
}

export default App;
