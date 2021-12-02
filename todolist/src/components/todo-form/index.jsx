import React from 'react';
import { useTodoForm } from '../hooks/use-todo-form';
import { TryButton } from '../ui/try-button';
import { TryInput } from '../ui/try-input';
import classes from './index.module.css';

export const TodoForm = ({todoItem, todoAdd}) => {
  const todoForm = useTodoForm(todoItem, todoAdd);

  return (
    <div className={classes.todoForm}>
      <TryInput
        placeholder="Input title 'To Do'"
        value={todoForm.todoItem.title}
        onChange={todoForm.onTodoChange}
      />
      <TryButton onClick={todoForm.onTodoAdd}>Add new todo</TryButton>
    </div>
  );
};