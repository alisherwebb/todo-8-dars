import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import toast from "react-hot-toast";

function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim();

    if (inputValue) {
      dispatch(addTodo(inputValue));
      toast.success("Yangi todo qo'shildi")
      inputRef.current.value = "";
    } else {
      toast.error("Xatolik bor!", error.message)
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 mx-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-6 rounded-2xl flex gap-3 flex-col"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Todo"
          autoComplete="off"
          required
          className="input input-bordered w-full py-3 bg-white text-black px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-xl bg-purple-600 text-white font-bold text-lg"
        >
          Craete
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
