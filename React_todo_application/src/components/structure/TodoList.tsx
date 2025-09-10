import { useState } from "react";
import { useTodos, type Todo } from "../../context/TodoContext";
import Modal from "../base/Modal";
import Button from "../base/Button";
import DueDateModal from "../base/DueDateModal";
import { BsCalendarDateFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, updateTodo, setDueDate } = useTodos();
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [dueDateTodo, setDueDateTodo] = useState<Todo | null>(null);

  return (
    <>
      <ul className="space-y-2  p-5 flex justify-center items-center flex-col ">
        <div className="border-b border-neutral-400 w-full flex font-semibold ">
          <div className="w-[70%] flex items-center gap-8 max-[820px]:text-sm max-[700px]:text-xs">
            <p className="w-[20%] text-center">Status</p>
            <p className="w-[80%] text-center">Tasks</p>
          </div>
          <div className="flex justify-between items-center w-[30%] max-[820px]:text-sm max-[700px]:text-xs max-[480px]:hidden">
            <p className="w-[33.3%] text-center">Due</p>
            <p className="w-[33.3%] text-center">Edit</p>
            <p className="w-[33.3%] text-center">Delete</p>
          </div>
        </div>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="w-full flex items-center justify-between bg-blue-200 p-2 min-w-[300px] rounded-lg  max-[480px]:flex-col  max-[480px]:gap-5"
          >
            <label className="flex justify-between items-center gap-8 cursor-pointer w-[70%] max-[480px]:w-full ">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className=" h-5 accent-blue-500 w-[20%]"
              />
              <div
                className={`${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-neutral-800"
                } w-[80%] break-words p-2`}
              >
                <p>{todo.text}</p>
              </div>
            </label>
            <div className="flex gap-2 justify-between items-center w-[30%] max-[480px]:w-full max-[480px]:justify-around">
              <Button
                color="secondary"
                size="minions"
                onClick={() => setDueDateTodo(todo)}
              >
                <span className="max-[888px]:hidden flex items-center justify-center">
                  {todo.dueDate
                    ? new Date(todo.dueDate).toLocaleDateString()
                    : "Set Date"}
                </span>
                <span className="hidden max-[888px]:flex items-center justify-center py-1"><BsCalendarDateFill/></span>
              </Button>
              <Button
                color="warning"
                size="minions"
                onClick={() => setEditingTodo(todo)}
                
              >
               <span className="max-[510px]:hidden">Edit</span> 
               <span className="hidden max-[510px]:flex items-center justify-center py-1"><FiEdit3 /></span>
              </Button>
              <Button
                color="danger"
                size="minions"
                onClick={() => deleteTodo(todo.id)}
              >
                <span className="max-[670px]:hidden">Delete</span>
                <span className="text-md hidden max-[670px]:flex items-center justify-center py-1">
                  <RiDeleteBin5Line />
                </span>
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal
        isOpen={!!editingTodo}
        initialValue={editingTodo?.text || ""}
        onClose={() => setEditingTodo(null)}
        onSubmit={(newText) => {
          if (editingTodo) {
            updateTodo(editingTodo.id, newText);
            setEditingTodo(null);
          }
        }}
      />
      <DueDateModal
        isOpen={!!dueDateTodo}
        initialDate={dueDateTodo?.dueDate}
        onClose={() => setDueDateTodo(null)}
        onSubmit={(date) => {
          if (!dueDateTodo) return;
          setDueDate(dueDateTodo.id, date);
          setDueDateTodo(null);
        }}
      />
    </>
  );
}
