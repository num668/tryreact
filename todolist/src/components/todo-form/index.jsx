import React from 'react';
import { useTodoForm } from '../hooks/use-todo-form';
import { TryButton } from '../ui/try-button';
import { TryInput } from '../ui/try-input';
import classes from './index.module.css';

export const TodoForm = ({todoItem, doTodoAdd}) => {
  const hookTodoForm = useTodoForm(todoItem ?? {title: '', done: false}, doTodoAdd);

  return (
    <div className={classes.todoForm}>
      <TryInput
        placeholder="Input title 'To Do'"
        value={hookTodoForm.todoTitle}
        onChange={hookTodoForm.onTodoChange}
      />
      <TryButton onClick={hookTodoForm.onTodoAdd}>Add new todo</TryButton>
    </div>
  );
};