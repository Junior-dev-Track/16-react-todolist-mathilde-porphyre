// App.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Be Awesome!', 'Eat a Cookie']);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <form onSubmit={handleNewTodo}>
        <input value={newTodo} onChange={handleNewTodoChange} />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
