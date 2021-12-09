import { FormEventHandler } from "react";

export interface ITodoFilterInterface {
    title: string;
    done: boolean | undefined;
};

export type TTodoFilterFunction = (item: ITodoFilterInterface) => void;

export type TTodoItemStateInterface = {
    todoFilter: ITodoFilterInterface;
    onTodoTitleFilter: FormEventHandler;
    onTodoCheckFilter: FormEventHandler;
}