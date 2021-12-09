export interface TTodoContentInterface {
    title: string;
    done: boolean;
}

export interface ITodoItemInterface extends TTodoContentInterface {
    key: number; 
}

export type TTodoFunction = (todoItem: TTodoContentInterface) => void;

export type TTodoItemsArray = Array<ITodoItemInterface>;