import { useState, useMemo } from "react";
import { TTodoItemsArray } from "../../../../commons/types";
import { TTodoListHook } from "./types";

export const useTodoList = (todoList: TTodoItemsArray): TTodoListHook => {
    const [todoFilter, setTodoFilter] = useState({title: '', done: undefined});
    
    const todoList1 = useMemo(() => {
        return todoFilter.done !== undefined
            ? todoList.filter((item) => item.done === !!todoFilter.done)
            : todoList;
    }, [todoList, todoFilter.done]);
    
    const todoList2 = useMemo(() => {
        return todoList1.filter(
            (item) => item.title.toLocaleLowerCase().includes(todoFilter.title.toLocaleLowerCase())
        );
    }, [todoList1, todoFilter.title]);

    return {
        todoList: todoList2,
        todoFilter,
        doTodoFilter: (item: any) => {
            setTodoFilter(item ? {title: String(item.title), done: item.done} : {title: '', done: true})
        }
    }
}