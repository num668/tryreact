import { FormEventHandler } from "react";

export type TTodoFilter = {
    title: string;
    done: boolean | undefined;
};

export type TTodoFuncFilter = (item: TTodoFilter) => void;

export type TTodoItemHook = {
    todoFilter: any;
    onTodoTitleFilter: FormEventHandler;
    onTodoCheckFilter: FormEventHandler;
}