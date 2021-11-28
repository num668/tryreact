import React, { useState } from 'react';

function TodoForm({addTodoItem}) {
  const [todoItem, setTodoItem] = useState({title: '', done: false});
  
  const handleAddTodoItem = () => {
    if (addTodoItem instanceof Function)
      addTodoItem(todoItem);
    setTodoItem({title: '', done: false});
  }

  return (
    <div>
      <input
        value={todoItem.title}
        onChange={e => setTodoItem({...todoItem, title: e.target.value })}
      />
      <button onClick={handleAddTodoItem}>Add</button>
    </div>
  );
};

export default TodoForm;