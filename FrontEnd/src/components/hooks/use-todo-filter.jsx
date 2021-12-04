import {useState} from "react";

export const useTodoFilter = (todoFilter, doTodoFilter) => {
    const [_todoFilter, setTodoFilter] = useState(todoFilter);

    return {
        todoFilter: _todoFilter,
        onTodoTitleFilter: (e) => {
            todoFilter = {...todoFilter, title: e.target.value};
            if (doTodoFilter instanceof Function) {
                doTodoFilter(todoFilter);
            }
            setTodoFilter(todoFilter);
        },
        onTodoCheckFilter: (e) => {
            todoFilter = {...todoFilter, done: (e.target.value === '' ? undefined : e.target.value === 'false' ? false : true)};
            if (doTodoFilter instanceof Function) {
                doTodoFilter(todoFilter);
            }
            setTodoFilter(todoFilter);
        }
    };
}