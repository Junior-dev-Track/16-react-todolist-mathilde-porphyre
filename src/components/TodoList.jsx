// TodoList.jsx
import React from 'react';

function TodoList({ todos, onTodoToggle, onDelete, remaining, handleDeleteCompleted, completed }) {
  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>To do <span>({remaining})</span></h2>
        {completed >= 2 && <button onClick={handleDeleteCompleted}>Delete All</button>}
      </div>
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
              {todo.name} <span className={`category-label ${todo.category}`}>{todo.category}</span>
            </div>
            {todo.done && (
              <i 
                className="fas fa-trash" 
                onClick={() => { if (todo.done) onDelete(todo.id) }} 
                //style={{ cursor: todo.done ? 'pointer' : 'not-allowed' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;