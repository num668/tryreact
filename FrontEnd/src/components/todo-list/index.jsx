import React from 'react';
import styled from 'styled-components';
import { useTodoList } from '../hooks/use-todo-list';
import { TodoFilter } from '../todo-filter';
import { TodoItem } from '../todo-item';

const TodoItemStylerd = styled(TodoItem)`
  background-color: ${(props) => Number(props.index) & 1 ? "#fdd": "fff"};
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TodoList = ({todoList, doTodoCheck, doTodoDelete}) => {
  const hookTodoList = useTodoList(todoList);
  
  return (<div>
    <TodoFilter
      todoFilter={hookTodoList.todoFilter}
      doTodoFilter={hookTodoList.doTodoFilter}
    />

    {hookTodoList.todoList.length
      ? <div className="todoList">
          {hookTodoList.todoList.map((item, index) => <TodoItemStylerd
            index={index}
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