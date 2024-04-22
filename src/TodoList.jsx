// TodoList.jsx
import React from 'react';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      <h2>My Todos</h2>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" id={`todo-${index}`} />
            <label htmlFor={`todo-${index}`}>{todo}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;