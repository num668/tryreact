import React, { useState } from 'react';
import {TryInput} from './ui/input/try-input.jsx';
import {TryButton} from './ui/button/try-button.jsx';

export const TodoItem = ({todoItem, checkTodoItem, removeTodoItem}) => {
  const [todoCheck, setTodoCheck] = useState(todoItem.done);
  
  const handleCheckTodoItem = (e) => {
    todoItem.done = e.target.checked;
    if (checkTodoItem instanceof Function)
      checkTodoItem(todoItem);
    setTodoCheck(todoItem.done)
  }

  const handleRemoveTodoItem = () => {
    if (removeTodoItem instanceof Function)
      removeTodoItem(todoItem);
  }  

  return (
    <div>
        <TryInput type="checkbox" checked={todoCheck} onChange={handleCheckTodoItem}/>
        <span>{todoItem.title}</span>
        <TryButton onClick={handleRemoveTodoItem}>Remove</TryButton>
    </div>
  );
}