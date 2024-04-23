// TodoForm.jsx
import React, { useRef } from 'react';

function TodoForm({ handleNewTodo }) {
  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const inputElement = inputRef.current;
    if (inputElement.value.trim() !== '') {
      handleNewTodo(inputElement.value);
      inputElement.value = '';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="todo" 
      placeholder="New todo" 
      ref={inputRef}
    />
    <button type="submit">Add Todo</button>
  </form>
  );
}

export default TodoForm;