import React from 'react';
import { TodoList } from '../todo-list';
import { TodoForm } from '../todo-form';
import { useTodoList } from '../hooks/use-todo.jsx';
import classes from './index.module.css';

export const Todo = () => {
  //-reset local storage-
  //localStorage.removeItem('todo'); 
  
  const todo = useTodoList();

  return (
    <div className={classes.todo}>
      <TodoForm
        todoItem={{title: '', done: false}}
        todoAdd={todo.todoAdd}
      />   
      <hr/>
      {/*<TodoFilter
        filter={todoFilter.filter}
        onTodoFilter={todoFilter.onTodoFilter}
      />*/}
      <TodoList
        todoList={todo.todoList}
        todoDelete={todo.todoDelete}
        todoCheck={todo.todoCheck}
      />
    </div>
  );
}