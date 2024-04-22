// App.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Learn React', done: false },
    { id: 2, name: 'Be Awesome!', done: false },
    { id: 3, name: 'Eat a Cookie', done: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), name: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const handleCheck = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  ));
};

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <form onSubmit={handleNewTodo}>
        <input value={newTodo} onChange={handleNewTodoChange} placeholder="Type a new todo" />
        <button type="submit">Add Todo</button>
      </form>
      <hr />
      <TodoList todos={todos} onTodoToggle={handleCheck} onDelete={handleDelete} />
    </div>
  );
}

export default App;