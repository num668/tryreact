import { useState } from "react";
import type { TTodoHook } from "./todo-types"
import type {  TTodoItemContent, TTodoItem, TTodoList } from "./commons/todo-types"

export const useTodo = (): TTodoHook => {
    const loadTodoList = (): TTodoList => {
        const storage = localStorage.getItem('todoList');
        const json = JSON.parse(storage ?? '');
        if (Array.isArray(json)) {
            let currentId = Date.now() - json.length;
            return json.map((item) => {
                return {key: currentId++, title: String(item.title), done: Boolean(item.done)};
            });
        }
        return [];
    };

    const saveTodo = (todoList: TTodoList): void => {
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
        doTodoAdd: (item: TTodoItemContent) => {
            const list = [...todoList, {...item, key: Date.now()}];
            saveTodo(list);
            setTodoList(list);
        },
        doTodoDelete: (item: TTodoItemContent) => {
            const list = todoList.filter(_item => item !== _item);
            saveTodo(list)
            setTodoList(list);
        },
        doTodoCheck: (item: TTodoItemContent) => {
            saveTodo(todoList);
        }
    }
}