import React from 'react';
import { TryInput } from '../ui/try-input';
import { TrySelect } from '../ui//try-select';
import { useTodoFilter } from '../hooks/use-todo-filter';

export const TodoFilter = ({todoFilter, doTodoFilter}) => {
    const hookTodoFilter = useTodoFilter(todoFilter, doTodoFilter);

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