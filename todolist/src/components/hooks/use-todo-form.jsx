import {useState} from "react";

export const useTodoForm = (todoItem, todoAdd) => {
    todoItem = todoItem ?? {title: '', done: false};
    const [title, setTodoTitle] = useState(todoItem.title);

    return {
        todoItem,
        onTodoChange: (e) => {
            todoItem.title = title;
            setTodoTitle(e.target.value);
        },
        onTodoAdd: (e) => {
            if (todoAdd instanceof Function) {
                todoAdd(todoItem);
            }
            setTodoTitle(title);
        }
    }
}