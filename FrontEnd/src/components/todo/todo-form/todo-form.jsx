import React from 'react';
import { useTodoForm } from './use-todo-form';
import { TryInput } from '../../ui/try-input';

export const TodoForm = ({todoItem, doTodoAdd}) => {
  const hookTodoForm = useTodoForm(todoItem ?? {title: '', done: false}, doTodoAdd);

  return (
    <form className="todoForm" onSubmit={hookTodoForm.onTodoAdd}>
      <TryInput
        placeholder="Input title 'To Do'"
        value={hookTodoForm.todoTitle}
        onChange={hookTodoForm.onTodoChange}
        type="text"
      />
      <TryInput type="submit" value="Add new todo"/>
    </form>
  );
};