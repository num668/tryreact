import React from 'react';
import { useTodoList } from '../hooks/use-todo-list';
import { TodoFilter } from '../todo-filter';
import { TodoItem } from '../todo-item';

export const TodoList = ({todoList, doTodoCheck, doTodoDelete}) => {
  const hookTodoList = useTodoList(todoList);
  
  return (<div>
    <TodoFilter
      todoFilter={hookTodoList.todoFilter}
      doTodoFilter={hookTodoList.doTodoFilter}
    />

    {hookTodoList.todoList.length
      ? <div className="todoList">
          {hookTodoList.todoList.map(item => <TodoItem
            key={item.key}
            todoItem={item}
            doTodoCheck={doTodoCheck}
            doTodoDelete={doTodoDelete}
          />)}
        </div>
      :
        <div className="todoList">
          <div className="todoItem">Empty</div>
        </div>}
    </div>);
}