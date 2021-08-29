import { useEffect, useRef, useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []); //Empty Dependency List [] means it will run only once on mount!

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        ref={inputRef}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
