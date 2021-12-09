//import styled from 'styled-components';
import { useTodoList } from './todo-list.state';
import { TodoFilter } from '../todo-filter';
import { TodoItem } from './todo-item';
import { TTodoFunction, TTodoItemsArray } from '../../../../commons/types';

/*const TodoItemStylerd = styled(TodoItem)`
  background-color: ${(props) => Number(props.index) & 1 ? "#fdd": "fff"};
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;*/

export const TodoList = (props: {todoList: TTodoItemsArray, doTodoCheck: TTodoFunction, doTodoDelete: TTodoFunction}): JSX.Element => {
  const hookTodoList = useTodoList(props.todoList);
  
  return (<div>
    <TodoFilter
      todoFilter={hookTodoList.todoFilter}
      doTodoFilter={hookTodoList.doTodoFilter}
    />

    {hookTodoList.todoList.length
      ? <div className="todoList">
          {hookTodoList.todoList.map((item: any) => <TodoItem
            className="todoItem"
            //index={index}
            key={item.key}
            todoItem={item}
            doTodoCheck={props.doTodoCheck}
            doTodoDelete={props.doTodoDelete}
          />)}
        </div>
      :
        <div className="todoList">
          <div className="todoItem">Empty</div>
        </div>}
    </div>);
}