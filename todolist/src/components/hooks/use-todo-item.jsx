import {useState} from "react";

export const useTodoItem = (todoItem, todoCheck, todoDelete) => {
    const [done, setTodoCheck] = useState(todoItem.done);

    return {
        todoItem,
        onTodoCheck: (e) => {
            todoItem.done = e.target.checked;
            if (todoCheck instanceof Function) {
                todoCheck(todoItem);
            }
            setTodoCheck(todoItem.done);
        },
        onTodoDelete: (e) => {
            if (todoDelete instanceof Function) {
                todoDelete(todoItem);
            }
        }
    }
}