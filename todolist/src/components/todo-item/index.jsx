import React from 'react';
import { TryInput } from '../ui/try-input';
import { TryButton } from '../ui/try-button';
import { useTodoItem } from '../hooks/use-todo-item';

export const TodoItem = ({todoItem, doTodoCheck, doTodoDelete}) => {
  const hookTodoItem = useTodoItem(todoItem, doTodoCheck, doTodoDelete);

  return (
    <div className="todoItem">
        <div>
          <TryInput
            type="checkbox"
            checked={hookTodoItem.todoDone}
            onChange={hookTodoItem.onTodoCheck}
          />
        </div>
        <div>
          <span>{todoItem.title}</span>
        </div>
        <div>
          <TryButton onClick={hookTodoItem.onTodoDelete}>Remove</TryButton>
        </div>
    </div>
  );
}