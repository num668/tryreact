import { SyntheticEvent, useState } from "react";
import { TTodoItemHook } from "./todo-item-types";
import { TTodoFunction, ITodoItemInterface } from "../../../../../commons/types";

export const useTodoItem = (todoItem: ITodoItemInterface, doTodoCheck: TTodoFunction, doTodoDelete: TTodoFunction): TTodoItemHook => {
    const [todoDone, setTodoCheck] = useState(todoItem.done);

    return {
        todoDone,
        onTodoCheck: (event: React.ChangeEvent<HTMLInputElement>) => {
            todoItem.done = event.currentTarget.checked;
            if (doTodoCheck instanceof Function) {
                doTodoCheck(todoItem);
            }
            setTodoCheck(todoItem.done);
        },
        onTodoDelete: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (doTodoDelete instanceof Function) {
                doTodoDelete(todoItem);
            }
        }
    }
}