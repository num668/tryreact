import { TTodoItemsArray } from "../../../../commons/types";
import { ITodoFilterInterface, TTodoFilterFunction as TTodoFilterFunc } from "../todo-filter/types";

export type TTodoListHook = {
    todoList: TTodoItemsArray,
    todoFilter: ITodoFilterInterface,
    doTodoFilter: TTodoFilterFunc
}