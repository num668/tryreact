import {useState} from "react";

export const useTodoForm = (todoItem, doTodoAdd) => {
    const [todoTitle, setTodoTitle] = useState(todoItem.title);

    return {
        todoTitle,
        onTodoChange: (e) => {
            todoItem.title = e.target.value;
            setTodoTitle(todoItem.title);
        },
        onTodoAdd: (e) => {
            e.preventDefault();
            todoItem.title = todoTitle;
            if (doTodoAdd instanceof Function) {
                doTodoAdd(todoItem);
            }
            setTodoTitle('');
        }
    }
}