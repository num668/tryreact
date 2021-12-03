import { useState, useMemo } from "react";

export const useTodo = () => {
    const loadTodoList = () => {
        const storage = JSON.parse(localStorage.getItem('todoList'));
        if (Array.isArray(storage)) {
            let currentId = Date.now() - storage.length;
            return storage.map((item) => {
                return {key: currentId++, title: String(item.title), done: Boolean(item.done)};
            });
        }
        return [];
    };

    const saveTodo = (todoList) => {
        if (Array.isArray(todoList)) {
            localStorage.setItem('todoList', JSON.stringify(todoList.map((item) => {
                return {title: String(item.title), done: Boolean(item.done) }
            })));
        }
        else
            localStorage.setItem('todoList', "[]");
    };

    const [todoList, setTodoList] = useState(loadTodoList());
    const [todoFilter, setTodoFilter] = useState({title: '', done: undefined});

    let copyTodoList = todoList;
    
    copyTodoList = useMemo(() => {
        return todoFilter.done !== undefined
            ? copyTodoList.filter((item) => item.done === !!todoFilter.done)
            : copyTodoList;
    }, [copyTodoList, todoFilter.done]);
    
    copyTodoList = useMemo(() => {
        return copyTodoList.filter(
            (item) => item.title.toLocaleLowerCase().includes(todoFilter.title.toLocaleLowerCase())
        );
    }, [copyTodoList, todoFilter.title]);

    return {
        todoList: copyTodoList,
        todoFilter,
        doTodoAdd: (item) => {
            const list = [...todoList, {...item, key: Date.now()}];
            saveTodo(list);
            setTodoList(list);
        },
        doTodoDelete: (item) => {
            const list = todoList.filter(_item => item !== _item);
            saveTodo(list)
            setTodoList(list);
        },
        doTodoCheck: (item) => {
            saveTodo(todoList);
        },
        doTodoFilter: (item) => {
            setTodoFilter(item ? {title: String(item.title), done: Boolean(item.done)} : {title: '', done: true})
        }
    }
}