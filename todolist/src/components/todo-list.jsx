import React from 'react';
import {TodoItem} from './todo-item.jsx';

export const TodoList = ({todoList, removeTodoItem, checkTodoItem}) => {
  return (Array.isArray(todoList) && todoList.length)
    ? todoList.map(todoItem => <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        removeTodoItem={removeTodoItem}
        checkTodoItem={checkTodoItem}
      />)
    : <div>Empty</div>;
}