import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from "uuid";

const getLocalStorage = ()=> {
    const data = localStorage.getItem("todos")
    if(data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const initialState = {
    todoList: getLocalStorage()
}

const changeLocalStorage =(data)=> {
    localStorage.setItem("todos", JSON.stringify(data))
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, {payload})=> {
            state.todoList.push({id: uuidv4(), text: payload, done: false})
            changeLocalStorage(state.todoList)
        },
        deleteTodo: (state, {payload})=> {
            state.todoList = state.todoList.filter((todo)=> todo.id !== payload);
            changeLocalStorage(state.todoList);
        },
        changeDone: (state, {payload}) => {
            const todo = state.todoList.find((todo)=> todo.id == payload)
            todo.done = !todo.done
            changeLocalStorage(state.todoList)
        }
    }
})

export const { addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer