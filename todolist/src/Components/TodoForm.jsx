import React, { useState } from 'react';
import TryButton from './UI/Button/TryButton';
import TryInput from './UI/Input/TryInput';

function TodoForm({addTodoItem}) {
  const [todoItem, setTodoItem] = useState({title: '', done: false});
  
  const handleAddTodoItem = () => {
    if (addTodoItem instanceof Function)
      addTodoItem(todoItem);
    setTodoItem({title: '', done: false});
  }

  return (
    <div>
      <TryInput
        value={todoItem.title}
        onChange={e => setTodoItem({...todoItem, title: e.target.value })}
      />
      <TryButton onClick={handleAddTodoItem}>Add</TryButton>
    </div>
  );
};

export default TodoForm;