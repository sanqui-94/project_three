import { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  onSubmit: (todo: string) => void;
}

const NewTodo = ({ onSubmit }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    onSubmit(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">What should be done?</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit"> Add TODO</button>
    </form>
  );
};

export default NewTodo;
