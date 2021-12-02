import React from 'react';
import classes from './index.module.css';
import {TodoItem} from '../todo-item';
import {useTodoFilter} from '../hooks/use-todo-filter'
import {useTodoItem} from '../hooks/use-todo-item'

export const TodoList = ({todoList, todoCheck, todoDelete}) => {
  //const todoFilter = useTodoFilter(todo.todoList, {title: '', done: undefined});

  //const todoItem = useTodoItem(todo.todoList, {title: '', done: undefined});
  
  return (todoList.length)
    ? todoList.map(item => <TodoItem
        className={classes.todoList}
        key={item.key}
        todoItem={item}
        todoDelete={todoDelete}
        todoCheck={todoCheck}
      />)
    : <div>Empty</div>;
}