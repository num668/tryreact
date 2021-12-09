import { TodoList } from './components/todo-list';
import { TodoForm } from './components/todo-form';
import { useTodo } from "./todo.state";

export const Todo = (): JSX.Element => {
  //-reset local storage-
  //localStorage.removeItem('todo'); 
  
  const todo = useTodo();

  return (
    <div className="todo">
      <TodoForm
        todoItem={undefined}
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