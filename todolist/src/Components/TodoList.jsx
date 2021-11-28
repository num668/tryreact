import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({todoList, removeTodoItem, checkTodoItem}) {
  return (Array.isArray(todoList) && todoList.length)
    ? todoList.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} removeTodoItem={removeTodoItem} checkTodoItem={checkTodoItem}/>)
    : <div>Empty</div>;
}

export default TodoList;
