import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "Making TODO APP!",
      isCompleted: true,
    },
    {
      text: "Shopping",
      isCompleted: false,
    },
    {
      text: "Have to update my PC",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const toggleTodo = (e, index) => {
    const { checked } = e.target;

    let newTodos = [...todos];

    newTodos[index].isCompleted = checked;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onEditTodo = (ev, index) => {
    let editTodos = todos.map((todo, i) => {
      if (i === index) {
        todo.text = ev.target.value;
      }
      return todo;
    });
    setTodos(editTodos);
  };

  return (
    <div className="todo-app">
      <div className="heading">
        <h1>What's the Plan for Today?</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos?.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            onEditTodo={onEditTodo}
          />
        ))}
      </div>
    </div>
  );
}
