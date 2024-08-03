function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  // to add todo by pressing enter on keyboard
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodos(todoValue);
      setTodoValue("");
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
        onKeyUp={handleKeyPress}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
