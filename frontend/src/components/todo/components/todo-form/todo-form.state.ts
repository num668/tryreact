import {useState} from "react";
import { TTodoFormHook } from "./types";
import { TTodoContentInterface, TTodoFunction } from "../../../../commons/types";

export const useTodoForm = (todoItem: TTodoContentInterface, doTodoAdd: TTodoFunction): TTodoFormHook => {
    const [todoTitle, setTodoTitle] = useState(todoItem.title);

    return {
        todoTitle,
        onTodoChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
            todoItem.title = event.currentTarget.value;
            setTodoTitle(todoItem.title);
        },
        onTodoAdd: (event: React.ChangeEvent<HTMLInputElement>): void => {
            event.preventDefault();
            todoItem.title = todoTitle;
            if (doTodoAdd instanceof Function) {
                doTodoAdd(todoItem);
            }
            setTodoTitle('');
        }
    }
}