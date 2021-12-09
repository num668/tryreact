import React from 'react';
import { TryInput } from '../../../../ui/base-input';
import { TryButton } from '../../../../ui/base-button';
import { useTodoItem } from './todo-item.state';
import { TTodoFunction, ITodoItemInterface } from '../../../../../commons/types';

export const TodoItem = (props: {className: string; todoItem: ITodoItemInterface, doTodoCheck: TTodoFunction, doTodoDelete: TTodoFunction}): JSX.Element => {
  const hookTodoItem = useTodoItem(props.todoItem, props.doTodoCheck, props.doTodoDelete);

  return (
    <div className={props.className}>
        <div>
          <TryInput
            type="checkbox"
            checked={hookTodoItem.todoDone}
            onChange={hookTodoItem.onTodoCheck}
          />
        </div>
        <div>
          <span>{props.todoItem.title}</span>
        </div>
        <div>
          <TryButton onClick={hookTodoItem.onTodoDelete}>Remove</TryButton>
        </div>
    </div>
  );
}