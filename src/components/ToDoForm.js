import React, { useState } from 'react';

export const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
    setValue('');
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder="Enter today's tasks"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};
