import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList() {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <div className=" max-w-[900px] mx-auto mt-10 w-full">
      <div className="mx-2">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 mx-2">
          My Todo List
        </h2>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="w-full bg-gray-200 rounded-2xl p-4 shadow-md border-2 border-gray-300 flex justify-between items-center"
            >
              <span className="text-lg text-gray-800">{todo.text}</span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                type="button"
                className="p-3 rounded-xl bg-red-100 border-2 border-red-200 text-red-600"
              >
                <RiDeleteBin6Line className="text-2xl" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
