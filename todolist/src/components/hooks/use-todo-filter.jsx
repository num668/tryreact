import {useState, useMemo} from "react";

export const useTodoFilter = (todoList, filter) => {
    const [_filter, setTodoFilter] = useState(filter);

    todoList = useMemo(() => {
        return _filter.done === undefined ? todoList : todoList.filter((item) => item.done === _filter.done);
    }, [todoList, _filter.done]);
    
    todoList = useMemo(() => {
        return todoList.filter((item) => item.title.toLocaleLowerCase().includes(_filter.title.toLocaleLowerCase()));
    }, [todoList, _filter.title]);

    return {
        todoList,
        filter: _filter,
        onTodoFilter: (item) => {
            setTodoFilter(item);
        }
    };
}