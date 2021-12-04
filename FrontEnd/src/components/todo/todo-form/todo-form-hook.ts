import {useState} from "react";
import { TTodoFormHook } from "./todo-form-types";
import { TTodoItemContent, TTodoFunc } from "../commons/todo-types";

export const useTodoForm = (todoItem: TTodoItemContent, doTodoAdd: TTodoFunc): TTodoFormHook => {
    const [todoTitle, setTodoTitle] = useState(todoItem.title);

    return {
        todoTitle,
        onTodoChange: (e: any): void => {
            todoItem.title = e.target.value;
            setTodoTitle(todoItem.title);
        },
        onTodoAdd: (e: any): void => {
            e.preventDefault();
            todoItem.title = todoTitle;
            if (doTodoAdd instanceof Function) {
                doTodoAdd(todoItem);
            }
            setTodoTitle('');
        }
    }
}