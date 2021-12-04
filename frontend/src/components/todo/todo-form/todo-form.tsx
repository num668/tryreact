import { useTodoForm } from './todo-form-hook';
import { TryInput } from '../../ui/base-input';
import { TTodoFunc, TTodoItemContent } from '../commons/todo-types';

export const TodoForm = (props: {todoItem: TTodoItemContent | undefined, doTodoAdd: TTodoFunc}): JSX.Element => {
  const hookTodoForm = useTodoForm(props.todoItem ?? {title: '', done: false}, props.doTodoAdd);

  return (
    <form className="todoForm" onSubmit={hookTodoForm.onTodoAdd}>
      <TryInput
        placeholder="Input title 'To Do'"
        value={hookTodoForm.todoTitle}
        onChange={hookTodoForm.onTodoChange}
        type="text"
      />
      <TryInput type="submit" value="Add new todo"/>
    </form>
  );
};