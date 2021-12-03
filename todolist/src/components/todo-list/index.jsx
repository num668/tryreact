import React from 'react';
import { TodoItem } from '../todo-item';
import classes from './index.module.css';

export const TodoList = ({todoList, doTodoCheck, doTodoDelete}) => {
  return (todoList.length)
    ? todoList.map(item => <TodoItem
        className={classes.todoList}
        key={item.key}
        todoItem={item}
        doTodoDelete={doTodoDelete}
        doTodoCheck={doTodoCheck}
      />)
    : <div>Empty</div>;
}