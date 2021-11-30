import {useMemo} from "react";

export const useTodosFilterByDone = (todoList, filterTodo) => {
    const filterTodoListByDone = useMemo(() => {
        return filterTodo.done === undefined
            ?
                todoList
            :
                todoList.filter((item) => item.done === filterTodo.done);
    }, [todoList, filterTodo.done]);
    
    return filterTodoListByDone;
}

export const useTodos = (todoList, filterTodo) => {
    const filterTodoListByDone = useTodosFilterByDone(todoList, filterTodo);
    
    const filterTodoListByTitle = useMemo(() => {
        return filterTodoListByDone.filter((item) => {
            return item.title.toLocaleLowerCase().includes(filterTodo.title.toLocaleLowerCase());
        });
    }, [filterTodoListByDone, filterTodo.title]);

    return filterTodoListByTitle;
}