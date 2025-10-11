import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = inputRef.current.value.trim();
    if (inputValue) {
      dispatch(addTodo(inputValue));
    }
    inputRef.current.value = "";
  };

  return (
    <div className="flex justify-center items-center mt-10 mx-2">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-gray-200 p-6 rounded-2xl shadow-lg flex gap-3 flex-col"
        >
          <h2 className="text-2xl text-center font-bold text-gray-700">
            Create Todo
          </h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Todo"
            autoComplete="off"
            required
            className="input input-bordered w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-lg"
          >
            Add Todo
          </button>
        </form>
      </div>

  );
}

export default AddTodo;
