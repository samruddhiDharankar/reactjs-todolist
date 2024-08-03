import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodo";

function App() {
  const {
    todos,
    todoValue,
    setTodoValue,
    handleAddTodos,
    handleDeleteTodos,
    handleEditTodos,
    handleClickCheckbox,
  } = useTodos();

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
