import { useState , useRef } from "react";
import { useTodos } from "../../context/TodoContext";
import Input from "../base/Input";
import Button from "../base/Button";

export default function TodoInput() {
  const { addTodo } = useTodos();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      setError(true);
      inputRef.current?.focus()
    } else {
      addTodo(value.trim());
      setValue("");
    }
  };

  return (
    <div className="w-full flex-1 p-3 max-w-[600px]">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={
            error ? "Please enter somthing to add " : "Enter your task here"
          }
          background="outline"
          size="md"
          className={error ? "placeholder-red-500" : "placeholder-gray-400"}
        />
        <Button type="submit" color="primary" size="md">
          Add Task
        </Button>
      </form>
    </div>
  );
}
