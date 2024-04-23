// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Learn React', done: false },
    { id: 2, name: 'Be Awesome!', done: false },
    { id: 3, name: 'Eat a Cookie', done: false },
  ]);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), name: newTodo, done: false }]);
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
    <div className='container'>
      <Header />
      <TodoForm handleNewTodo={handleNewTodo} />
      <hr />
      <TodoList todos={todos} onTodoToggle={handleCheck} onDelete={handleDelete} />
    </div>
  );
}

export default App;