import React, { useEffect, useState } from "react";
import { TodoItem } from "../types/TodoItem";
import "./TodoList.css";

interface TodoListProps {
  items: TodoItem[];
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ items, onDeleteTodo }: TodoListProps) => {
  const [list, setList] = useState<[] | TodoItem[]>([]);
  useEffect(()=>{
    setList(items);
  }, [items]);

  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
