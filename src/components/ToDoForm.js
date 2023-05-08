import React, { useState } from 'react';

export const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};
