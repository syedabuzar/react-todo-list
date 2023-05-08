import React, { useState } from 'react';

export const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('');
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Update task'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};
