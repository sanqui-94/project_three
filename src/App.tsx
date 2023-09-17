import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { TodoItem } from "./types/TodoItem";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const appendTODO = (todo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.floor(Math.random() * 100).toString(), text: todo },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onSubmit={appendTODO} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
