import React, { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);
  const addToDo = (todo) => {
    setToDos([
      ...toDos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div className='TodoWrapper'>
      <ToDoForm addToDo={addToDo} />
    </div>
  );
};
