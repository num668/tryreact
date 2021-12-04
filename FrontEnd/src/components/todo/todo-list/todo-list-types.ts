import { TTodoList } from "../commons/todo-types";
import { TTodoFilter, TTodoFuncFilter as TTodoFilterFunc } from "./components/todo-filter/todo-filter-types";

export type TTodoListHook = {
    todoList: TTodoList,
    todoFilter: TTodoFilter,
    doTodoFilter: TTodoFilterFunc
}