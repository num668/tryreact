import { useState } from "react";
import { TTodoItemHook } from "./todo-item-types";
import { TTodoFunc, TTodoItem } from "../../../commons/todo-types";

export const useTodoItem = (todoItem: TTodoItem, doTodoCheck: TTodoFunc, doTodoDelete: TTodoFunc): TTodoItemHook => {
    const [todoDone, setTodoCheck] = useState(todoItem.done);

    return {
        todoDone,
        onTodoCheck: (e: any) => {
            todoItem.done = e.target.checked;
            if (doTodoCheck instanceof Function) {
                doTodoCheck(todoItem);
            }
            setTodoCheck(todoItem.done);
        },
        onTodoDelete: (e: any) => {
            if (doTodoDelete instanceof Function) {
                doTodoDelete(todoItem);
            }
        }
    }
}