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

    return {
        todoList,
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
        }
    }
}