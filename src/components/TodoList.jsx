// TodoList.jsx
import React from 'react';

function TodoList({ todos, onTodoToggle, onDelete, onEdit }) {
  return (
    <div className="todo-list">
      <h2>To do</h2>
      <ul>
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-item-content">
              <input 
                type="checkbox" 
                className="rounded-checkbox"
                id={todo.id}
                name={todo.name} 
                checked={todo.done}
                onChange={() => onTodoToggle(todo.id)}
              /> 
              {todo.name}
            </div>
            <i 
              className="fas fa-trash" 
              onClick={() => { if (todo.done) onDelete(todo.id) }} 
              //style={{ cursor: todo.done ? 'pointer' : 'not-allowed' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;