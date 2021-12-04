import { TTodoFunc, TTodoList } from "./commons/todo-types";

export type TTodoHook = {
    todoList: TTodoList;
    doTodoAdd: TTodoFunc;
    doTodoDelete: TTodoFunc;
    doTodoCheck: TTodoFunc;
}