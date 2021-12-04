import { FormEventHandler } from "react"

export type TTodoFormHook = {
    todoTitle: string;
    onTodoChange: FormEventHandler;
    onTodoAdd: FormEventHandler;
}