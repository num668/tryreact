import {useState} from "react";

export const useTodoItem = (todoItem, doTodoCheck, doTodoDelete) => {
    const [todoDone, setTodoCheck] = useState(todoItem.done);

    return {
        todoDone,
        onTodoCheck: (e) => {
            todoItem.done = e.target.checked;
            if (doTodoCheck instanceof Function) {
                doTodoCheck(todoItem);
            }
            setTodoCheck(todoItem.done);
        },
        onTodoDelete: (e) => {
            if (doTodoDelete instanceof Function) {
                doTodoDelete(todoItem);
            }
        }
    }
}