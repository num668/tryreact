import React, { useState } from 'react';
import {TryInput} from '../ui/try-input';
import {TryButton} from '../ui/try-button';
import classes from './index.module.css';
import { useTodoItem } from '../hooks/use-todo-item';

export const TodoItem = ({todoItem, todoCheck, todoDelete}) => {
  const _todoItem = useTodoItem(todoItem, todoCheck, todoDelete);

  return (
    <div className={classes.todoItem}>
        <TryInput
          type="checkbox"
          checked={_todoItem.todoItem.done}
          onChange={_todoItem.onTodoCheck}
        />
        <span>{todoItem.title}</span>
        <TryButton onClick={_todoItem.onTodoDelete}>Remove</TryButton>
    </div>
  );
}