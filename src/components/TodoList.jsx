import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../features/todos/todoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";


function TodoList() {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setEditedText(todo.text);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editedText.trim()) {
      dispatch(editTodo({ id: selectedTodo.id, text: editedText.trim() }));
      toast.success("Todo muvaffaqiyatli tahrirlandi!");
      setIsModalOpen(false);
    } else {
      toast.error("Bo‘sh matnni saqlab bo‘lmaydi!");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    toast.success("Todo o‘chirildi!");
  };

  return (
    <div className="max-w-[900px] mx-auto mt-10 w-full">
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
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(todo)}
                  type="button"
                  className="p-3 rounded-xl bg-blue-100 border-2 border-blue-200 text-blue-600 hover:bg-blue-200 transition"
                >
                  <MdEdit className="text-xl" />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  type="button"
                  className="p-3 rounded-xl bg-red-100 border-2 border-red-200 text-red-600 hover:bg-red-200 transition"
                >
                  <RiDeleteBin6Line className="text-xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
              Edit Todo
            </h2>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
              >
                Back
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
