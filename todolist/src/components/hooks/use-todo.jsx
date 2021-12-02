import {useState} from "react";

export const useTodoList = () => {
    const loadTodo = () => {
        const storage = JSON.parse(localStorage.getItem('todoList'));
        if (Array.isArray(storage)) {
            let currentId = Date.now() - storage.length;
            return storage.map((item) => {
                return {key: currentId++, title: String(item.title), done: Boolean(item.done)};
            });
        }
        return [];
    };

    const [_todoList, setValues] = useState(loadTodo());

    const saveTodo = (todoList) => {
        if (Array.isArray(todoList)) {
            localStorage.setItem('todoList', JSON.stringify(todoList.map((item) => {
                return {title: String(item.title), done: Boolean(item.done) }
            })));
        }
        else
            localStorage.setItem('todoList', "[]");
    };

    return {
        todoList: _todoList,
        todoAdd: (item) => {
            const list = [..._todoList, {...item, key: Date.now()}];
            saveTodo(list);
            setValues(list);
        },
        todoDelete: (item) => {
            const list = _todoList.filter(_item => item !== _item);
            saveTodo(list)
            setValues(list);
        },
        todoCheck: (item) => {
            saveTodo(_todoList);
        }
    }
}