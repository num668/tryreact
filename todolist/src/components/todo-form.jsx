import React, { useState } from 'react';
import {TryButton} from './ui/button/try-button.jsx';
import {TryInput} from './ui/input/try-input.jsx';

export const TodoForm = ({addTodoItem, ...props}) => {
  const [todoItem, setTodoItem] = useState({title: '', done: false});
  
  const handleAddTodoItem = () => {
    if (addTodoItem instanceof Function)
      addTodoItem(todoItem);
    setTodoItem({title: '', done: false});
  }

  return (
    <div>
      <TryInput
        placeholder={props.placeholder}
        value={todoItem.title}
        onChange={e => setTodoItem({...todoItem, title: e.target.value })}
      />
      <TryButton onClick={handleAddTodoItem}>{props.caption ?? "Add"}</TryButton>
    </div>
  );
};