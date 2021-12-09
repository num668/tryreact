import { useTodoForm } from './todo-form.state';
import { TryInput } from '../../../ui/base-input';
import { TTodoFunction, TTodoContentInterface } from '../../../../commons/types';

export const TodoForm = (props: {todoItem: TTodoContentInterface | undefined, doTodoAdd: TTodoFunction}): JSX.Element => {
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