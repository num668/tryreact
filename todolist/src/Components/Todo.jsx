import React, { useState } from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

function Todo() {
  // reset local storage
  //localStorage.removeItem('todo'); 

  /*const [todoList, setTodoList] = useState([
    {id: 1, title: "123", done: false},
    {id: 2, title: "321", done: false}
  ]);*/
  
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
      <TodoForm addTodoItem={addTodoItem}/>
      <TodoList todoList={todoList} removeTodoItem={removeTodoItem} checkTodoItem={checkTodoItem}/>
    </div>
  );
}

export default Todo;