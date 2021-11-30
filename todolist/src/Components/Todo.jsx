import React, { useState } from 'react';
import {TodoList} from './todo-list.jsx';
import {TodoForm} from './todo-form.jsx';
import {TodoFilter} from './todo-filter.jsx';
import {useTodos} from './hooks/use-todo.jsx';

export const Todo = () => {
  // reset local storage
  //localStorage.removeItem('todo'); 
  
  const [todoList, setTodoList] = useState((() => {
    const storage = JSON.parse(localStorage.getItem('todoList'));
    if (Array.isArray(storage)) {
      let currentId = Date.now() - storage.length;
      return storage.map((item) => {
        return {id: currentId++, title: String(item.title), done: Boolean(item.done)}
      });
    }
    else {
      return [];
    }
  })());
  const [filterTodo, setFilterTodo] = useState({title: '', done: undefined});
  const filteredTodoList = useTodos(todoList, filterTodo);

  const saveTodoList = (list) => {
    if (Array.isArray(list)) {
      localStorage.setItem('todoList', JSON.stringify(list.map((item) => {
        return {title: String(item.title), done: Boolean(item.done) }
      })));
    }
    else {
      localStorage.setItem('todoList', "[]");
    }
  }

  const addTodoItem = (todoItem) => {
    const newTodoList = [...todoList, {...todoItem, id: Date.now()}];
    saveTodoList(newTodoList);
    setTodoList(newTodoList);
  }

  const removeTodoItem = (todoItem) => {
    const newTodoList = todoList.filter(item => item.id !== todoItem.id);
    saveTodoList(newTodoList);
    setTodoList(newTodoList);
  }
  
  const checkTodoItem = (todoItem) => {
    saveTodoList(todoList);
  }

  return (
    <div>
      <TodoForm
        placeholder="Input title ToDo"
        caption="Add new todo"
        addTodoItem={addTodoItem}
      />      
      <hr/>
      <TodoFilter
        filterTodo={filterTodo}
        setFilterTodo={setFilterTodo}
      />
      <TodoList
        todoList={filteredTodoList}
        removeTodoItem={removeTodoItem}
        checkTodoItem={checkTodoItem}
      />
    </div>
  );
}