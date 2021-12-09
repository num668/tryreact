import { TTodoFunction, TTodoItemsArray } from "../../commons/types";

export interface TTodoStateInterface {
    todoList: TTodoItemsArray;
    doTodoAdd: TTodoFunction;
    doTodoDelete: TTodoFunction;
    doTodoCheck: TTodoFunction;
}