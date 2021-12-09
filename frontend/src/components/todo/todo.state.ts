import { useState } from "react";
import type { TTodoStateInterface } from "./types"
import type {  TTodoContentInterface, TTodoItemsArray } from "../../commons/types"

export const useTodo = (): TTodoStateInterface => {
    const loadTodoList = (): TTodoItemsArray => {
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

    const saveTodo = (todoList: TTodoItemsArray): void => {
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
        doTodoAdd: (item: TTodoContentInterface) => {
            const list = [...todoList, {...item, key: Date.now()}];
            saveTodo(list);
            setTodoList(list);
        },
        doTodoDelete: (item: TTodoContentInterface) => {
            const list = todoList.filter(_item => item !== _item);
            saveTodo(list)
            setTodoList(list);
        },
        doTodoCheck: (item: TTodoContentInterface) => {
            saveTodo(todoList);
        }
    }
}