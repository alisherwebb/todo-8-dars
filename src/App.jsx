import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen py-10">
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App;