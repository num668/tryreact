import React from 'react';
import { TodoList } from '../todo-list';
import { TodoForm } from '../todo-form';
import { useTodo } from '../hooks/use-todo.jsx';

export const Todo = () => {
  //-reset local storage-
  //localStorage.removeItem('todo'); 
  
  const todo = useTodo();

  return (
    <div className="todo">
      <TodoForm
        doTodoAdd={todo.doTodoAdd}
      />   
      <TodoList
        todoList={todo.todoList}
        doTodoDelete={todo.doTodoDelete}
        doTodoCheck={todo.doTodoCheck}
      />
    </div>
  );
}