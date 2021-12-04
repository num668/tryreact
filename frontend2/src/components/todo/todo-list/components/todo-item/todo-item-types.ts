import { FormEventHandler } from "react";

export type TTodoItemHook = {
    todoDone: boolean;
    onTodoCheck: FormEventHandler;
    onTodoDelete: FormEventHandler;
}