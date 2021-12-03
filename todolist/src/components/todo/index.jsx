import React from 'react';
import { TodoList } from '../todo-list';
import { TodoForm } from '../todo-form';
import { TodoFilter } from '../todo-filter';
import { useTodo } from '../hooks/use-todo.jsx';
import classes from './index.module.css';

export const Todo = () => {
  //-reset local storage-
  //localStorage.removeItem('todo'); 
  
  const todo = useTodo();

  return (
    <div className={classes.todo}>
      <TodoForm
        doTodoAdd={todo.doTodoAdd}
      />   
      <hr/>
      <TodoFilter
        todoFilter={todo.todoFilter}
        doTodoFilter={todo.doTodoFilter}
      />
      <TodoList
        todoList={todo.todoList}
        doTodoDelete={todo.doTodoDelete}
        doTodoCheck={todo.doTodoCheck}
      />
    </div>
  );
}