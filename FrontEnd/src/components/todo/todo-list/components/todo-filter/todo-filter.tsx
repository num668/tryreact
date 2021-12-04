import { TryInput } from '../../../../ui/base-input';
import { TrySelect } from '../../../../ui/base-select';
import { useTodoFilter } from './todo-filter-hook';
import { TTodoFilter } from './todo-filter-types';
import { TTodoFuncFilter } from './todo-filter-types'; 

export const TodoFilter = (props: {todoFilter: TTodoFilter, doTodoFilter: TTodoFuncFilter}): JSX.Element => {
    const hookTodoFilter = useTodoFilter(props.todoFilter, props.doTodoFilter);

    return (
        <div className="todoFilter">
            <TryInput 
                type="text"
                placeholder="Filter"
                value={hookTodoFilter.todoFilter.title}
                onChange={hookTodoFilter.onTodoTitleFilter}
            />
            <TrySelect
                value={hookTodoFilter.todoFilter.done}
                options={[
                    {value: '', title: "do not filter by done"},
                    {value: 'true', title: "show only done"},
                    {value: 'false', title: "show only not done"}
                ]}
                onChange={hookTodoFilter.onTodoCheckFilter}
            />
        </div>
    );
};