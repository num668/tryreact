import React, { useState } from 'react';

function TodoItem({todoItem, checkTodoItem, removeTodoItem}) {
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
        <input type="checkbox" checked={todoCheck} onChange={handleCheckTodoItem}/>
        <span>{todoItem.title}</span>
        <button onClick={handleRemoveTodoItem}>remove</button>
    </div>
  );
}

export default TodoItem;
