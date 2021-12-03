import React from 'react';
import { TryInput } from '../ui/try-input';
import { TryButton } from '../ui/try-button';
import { useTodoItem } from '../hooks/use-todo-item';
import classes from './index.module.css';

export const TodoItem = ({todoItem, doTodoCheck, doTodoDelete}) => {
  const hookTodoItem = useTodoItem(todoItem, doTodoCheck, doTodoDelete);

  return (
    <div className={classes.todoItem}>
        <TryInput
          type="checkbox"
          checked={hookTodoItem.todoDone}
          onChange={hookTodoItem.onTodoCheck}
        />
        <span>{todoItem.title}</span>
        <TryButton onClick={hookTodoItem.onTodoDelete}>Remove</TryButton>
    </div>
  );
}