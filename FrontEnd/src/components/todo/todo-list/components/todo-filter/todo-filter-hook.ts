import {useState} from "react";
import { TTodoFilter, TTodoFuncFilter, TTodoItemHook } from "./todo-filter-types";

export const useTodoFilter = (todoFilter: TTodoFilter, doTodoFilter: TTodoFuncFilter): TTodoItemHook => {
    const [_todoFilter, setTodoFilter] = useState(todoFilter);

    return {
        todoFilter: _todoFilter,
        onTodoTitleFilter: (e: any) => {
            todoFilter = {...todoFilter, title: e.target.value};
            if (doTodoFilter instanceof Function) {
                doTodoFilter(todoFilter);
            }
            setTodoFilter(todoFilter);
        },
        onTodoCheckFilter: (e: any) => {
            todoFilter = {...todoFilter, done: (e.target.value === '' ? undefined : e.target.value === 'false' ? false : true)};
            if (doTodoFilter instanceof Function) {
                doTodoFilter(todoFilter);
            }
            setTodoFilter(todoFilter);
        }
    };
}