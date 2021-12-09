import {useState} from "react";
import { ITodoFilterInterface, TTodoFilterFunction, TTodoItemStateInterface } from "./types";

export const useTodoFilter = (todoFilter: ITodoFilterInterface, doTodoFilter: TTodoFilterFunction): TTodoItemStateInterface => {
    const [_todoFilter, setTodoFilter] = useState(todoFilter);

    return {
        todoFilter: _todoFilter,
        onTodoTitleFilter: (event: React.ChangeEvent<HTMLInputElement>) => {
            todoFilter = {...todoFilter, title: event.currentTarget.value};
            if (doTodoFilter instanceof Function) {
                doTodoFilter(todoFilter);
            }
            setTodoFilter(todoFilter);
        },
        onTodoCheckFilter: (event: React.ChangeEvent<HTMLInputElement>) => {
            todoFilter = {...todoFilter, done: (event.currentTarget.value === '' ? undefined : event.currentTarget.value === 'false' ? false : true)};
            if (doTodoFilter instanceof Function) {
                doTodoFilter(todoFilter);
            }
            setTodoFilter(todoFilter);
        }
    };
}