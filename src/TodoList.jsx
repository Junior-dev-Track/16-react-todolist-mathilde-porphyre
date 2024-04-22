// TodoList.jsx
import React from 'react';

function TodoList({ todos, onTodoToggle, onDelete }) {
  return (
    <div className="todo-list">
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <input 
              type="checkbox" 
              id={todo.id}
              name={todo.name} 
              checked={todo.done}
              onChange={() => onTodoToggle(todo.id)}
            /> 
            {todo.name}
            <i 
                className="fas fa-trash" 
                onClick={() => onDelete(todo.id)} 
                disabled={!todo.done}
                style={{ cursor: todo.done ? 'pointer' : 'not-allowed' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;